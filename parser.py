# -*- coding: utf-8 -*-
import copy
import os
import re
import sys
from geometry import Point, matrix_transform
from shared import _AttributeDict

__author__ = 'fabio'

cairo2ps = {
    "m": "moveto",
    "c": "curveto",
    "l": "lineto",
    "h": "closepath",
    "w": "setlinewidth",
    "M": "setmiterlimit",
    "S": "stroke",
    "n": "newpath",
    "f": "fill",
    "g": "setgray",
    "rg": "setrgbcolor",
    "q": "gsave",
    "Q": "grestore",
    "J": "setlinecap",
    "j": "setlinejoin",
    "d": "setdash",
    "cm": "sixarrayastoreconcat",
    "showpage": "showpage",
}

dash_re = re.compile(r"\[(\d*.?\d*) (\d*.?\d*)\] (\d*.?\d*)")
rectclip_re = re.compile(r"^q (?P<x>\d+.?\d*) (?P<y>\d+.?\d*) "
                         r"(?P<width>\d+.?\d*) (?P<height>\d+.?\d*) "
                         r"rectclip q$")


class GraphicState(_AttributeDict):
    def __init__(self, *args, **kwargs):
        super(GraphicState, self).__init__(*args, **kwargs)
        self.update({"color": "black",
                     "point": Point(0, 0),
                     "style": None,
                     "path": None,
                     #[ a b c d h k ]
                     #Set "d" to -1 value cause y is reversed
                     "matrix": [1, 0, 0,
                                -1, 0, 0],
        })


def path_required(funct):
    """
    Check if a path exists, otherwise create a new one
    """

    def wrapper(parser, *args, **kwargs):
        if not parser.current_state.path:
            parser.newpath()
        return funct(parser, *args, **kwargs)

    return wrapper


def new_path_required(funct):
    """
    Create a new path before
    """

    def wrapper(parser, *args, **kwargs):
        parser.newpath()
        return funct(parser, *args, **kwargs)

    return wrapper


class PSParser(object):
    """
    """

    def __init__(self, postscript, stream=sys.stdout, indent=0, shape_name="shape"):
        self.paths, self.params = [], []
        self.states, self.rectclip = [], {}
        if hasattr(stream, "write"):
            self.stream = stream
        else:
            raise ValueError("Stream must support write operation")
        self.postscript = postscript
        self.states.append(GraphicState())
        self.indent = indent
        self.shape_name = shape_name


    @property
    def current_state(self):
        """
        This returns the current state of the parser
        """
        return self.states[-1]

    @property
    def current_path(self):
        """
        This returns the current path the parser is drawing
        """
        return self.current_state.path

    def clear_params_stack(self):
        """
        Clear the parameters stack
        """
        self.params = []

    def write(self, *args):
        """
        Utility function to write JS code line by line.
        When a line is written, current parameters stack got cleared
        """
        if self.indent:
            self.stream.write(" " * self.indent)
        for arg in args:
            self.stream.write(arg)
        self.stream.write("\n")
        self.clear_params_stack()

    def apply_matrix_transform(self, point):
        return matrix_transform(point, self.current_state.matrix)

    def run(self):
        """
        Starts the parser
        """
        tokens = []
        #When a retclip is found, tokenize each parameter
        with open(self.postscript) as ps:
            for l in ps:
                if not self.rectclip:
                    m = rectclip_re.match(l)
                    self.rectclip = m.groupdict() if m else None
                else:
                    self.current_state.matrix[5] = float(self.rectclip["height"])
                    print(l[:-1])
                    tokens.extend(l.split())

        self.write("function {0}(){{".format(self.shape_name))
        self.indent = 4
        #for each token identify the method to invoke
        for token in tokens:
            if token in cairo2ps.keys():
                getattr(self, cairo2ps[token])()
            elif token.isalpha() or token == "f*":
                print("//Skipping token {0} with params {1}".format(token, self.params))
                self.clear_params_stack()
            else:
                self.params.append(token)
        self.indent = 0
        self.write("}")

    @path_required
    def _set_property(self, prop, value):
        self.current_state.style[prop] = value
        if isinstance(value, str) and not value.strip().lower().startswith("new"):
            value = '"{}"'.format(value)
        self.write("{0}.{1} = {2};".format(self.current_path, prop, value))

    def sixarrayastoreconcat(self):
        """
        Change the transformation matrix.
        Since y coordinates are reversed, we reverse them and adjust
        the offset by the retclip height
        """
        self.current_state.matrix = [float(f) for f in self.params]
        self.current_state.matrix[3] *= float(-1)
        self.current_state.matrix[5] -= float(self.rectclip["height"])
        self.clear_params_stack()

#TODO use a metaclass to create a method for each cairo2ps value raising NotImplemented error
for v in cairo2ps.values():
    if not hasattr(PSParser, v):
        def stub(instance):
            raise NotImplementedError("Command not implemented")

        setattr(PSParser, v, stub)


class PaperParser(PSParser):
    """
    Convert a PostScript to a PaperScript
    """
    style_dict = {}

    def __init__(self, *args, **kwargs):
        super(PaperParser, self).__init__(*args, **kwargs)
        self.style_dict.update({
            "setmiterlimit": "miterLimit",
            "setlinewidth": "strokeWidth",
            "setlinecap": "strokeCap",
            "setlinejoin": "strokeJoin",
        })
        self.current_state.style = {v: None for v in self.style_dict.values()}
        self.path_format = kwargs.get("path_format", "path{0}")

    def newpath(self):
        """
        Create a new JS Path object
        """
        path = self.path_format.format(len(self.paths) if len(self.paths) > 0 else '')
        self.paths.append(path)
        self.states.append(copy.copy(self.current_state))
        self.current_state.path = path
        self.stream.write("{1}var {0} = new CompoundPath();\n".format(self.current_path,
                                                                      " " * self.indent))
        # do not clear params. In case we have a newpath moveto combo there could be
        # parameters in stack which need to be processed

    @path_required
    def moveto(self):
        """
        Move current path to position contained in parsed parameters
        """
        #TODO: rmoveto should be the relative one. Confusion???
        self.write("{0}.moveTo({1});".format(self.current_path,
                                             self.apply_matrix_transform(Point(self.params))))

    @path_required
    def lineto(self):
        """
        Draw a line from current point to the position in parsed parameters
        """
        #TODO: rlineto should be the relative one. Confusion???
        self.write("{0}.lineTo({1});".format(self.current_path,
                                             self.apply_matrix_transform(Point(self.params))))

    @path_required
    def curveto(self):
        """
        Draw a curve passing for the parsed parameters
        """
        self.write("{0}.cubicCurveTo({1}, {2}, {3});".format(self.current_path,
                                                             self.apply_matrix_transform(Point(self.params[0:2])),
                                                             self.apply_matrix_transform(Point(self.params[2:4])),
                                                             self.apply_matrix_transform(Point(self.params[4:6]))))

    @path_required
    def closepath(self):
        """
        Close current path
        """
        self.write("{0}.closePath();".format(self.current_path))

    @path_required
    def stroke(self):
        """
        Draw the path objects.
        This could be substituted by paper.view.draw() if not in PaperScript mode
        """
        self.write("{0}.strokeColor = {1};".format(self.current_path,
                                                   self.current_state.color))

    @path_required
    def setmiterlimit(self):
        """
        Set the miter limit of the current path
        """
        self._set_property(self.style_dict["setmiterlimit"], self.params[0])

    @path_required
    def setlinewidth(self):
        """
        Set the line width of the current path
        """
        self._set_property(self.style_dict["setlinewidth"], self.params[0])

    @path_required
    def setlinecap(self):
        """
        Set the line cap of the current path
        """
        style = ("butt", "round", "square")[int(self.params[0])]
        self._set_property(self.style_dict["setlinecap"], style)

    @path_required
    def setlinejoin(self):
        """
        Set the line join of the current path
        """
        style = ("miter", "round", "bevel")[int(self.params[0])]
        self._set_property(self.style_dict["setlinejoin"], style)

    @path_required
    def setdash(self):
        """
        Set the dash style to the current path
        """
        m = dash_re.match(" ".join(self.params))
        if m:
            self.current_state.style["dashArray"] = [int(g) if g else 0 for g in m.groups()[:2]]
            self.write("{0}.dashArray = [{1}, {2}];".format(self.current_path,
                                                            self.current_state.style["dashArray"][0],
                                                            self.current_state.style["dashArray"][1]))
            self.current_state.style["dashOffset"] = int(m.groups[-1])
            self.write("{0}.dashOffset = {1};".format(self.current_path,
                                                      self.current_state.style["dashOffset"]))
        self.clear_params_stack()

    @path_required
    def fill(self):
        """
        Set the fill color of the current path.
        In postscript the fill command clears the current path. Generally
        there's a gsave/grestore to continue drawing. We could have to handle this
        in a better way
        """
        self._set_property("fillColor", self.current_state.color)

    def setgray(self):
        """
        Set the current color to the passed gray tonality
        """
        self.current_state.color = "new GrayColor({0})".format(1 - int(self.params[0]))
        self.clear_params_stack()

    def setrgbcolor(self):
        """
        Set the current color to an RGB combination
        """
        self.current_state.color = "new RGBColor({0}, {1}, {2})".format(*self.params)
        self.clear_params_stack()

    def gsave(self):
        """
        Save the current state and clear the path
        """
        self.states.append(copy.copy(self.current_state))

    def grestore(self):
        """
        Restore the state "popping" it from the stack
        """
        if self.states and len(self.states) > 1:
            self.states.pop()

    def _apply_style_from_state(self):
        """
        Apply current properties to current path
        """
        style = ",".join(["{0}: {1}".format(k, v) for k, v in self.current_state.style.items() if v])
        if style:
            self.write("{0}.style = {{{1}}};".format(self.current_path, style))

    def showpage(self):
        """
        This ends the page drawing
        We will use this one to group paths and render just a single item
        """
        if len(self.paths) > 1:
            self.states.append(copy.copy(self.current_state))
            self.current_state.path = "compoundPath"
            self.write("var {0} = new CompoundPath([{1}]);".format(self.current_path,
                                                                   ",".join(self.paths)))
            self._apply_style_from_state()
        self.write("return {{name:\"{0}\",width:{1}, "
                   "height:{2},path:{3}}};".format(self.shape_name,
                                                   self.rectclip["width"],
                                                   self.rectclip["height"],
                                                   self.paths[0] if len(
                                                       self.paths) == 1 else "compoundPath"))


class CanvasParser(PSParser):
    """
    Convert a PostScript to a HTML5 canvas JavaScript
    """
    style_dict = {}

    def __init__(self, *args, **kwargs):
        super(CanvasParser, self).__init__(*args, **kwargs)
        self.style_dict.update({
            "setmiterlimit": "miterLimit",
            "setlinewidth": "lineWidth",
            "setlinecap": "lineCap",
            "setlinejoin": "lineJoin",
        })
        self.current_state.style = {v: None for v in self.style_dict.values()}
        self.canvas_id = kwargs.get("canvas_id", "myCanvas")
        self.path_name = kwargs.get("path_format", "context")

    def newpath(self):
        """
        Create a new JS Path object
        """
        self.current_state.path = self.path_name

        if len(self.paths) == 1:
            self.stream.write(
                "{1}var canvas = document.getElementById('{0}');\n".format(self.canvas_id, " " * self.indent))
            self.stream.write("{1}var {0} = canvas.getContext('2d');\n".format(self.current_path, " " * self.indent))
            self.stream.write("{1}{0}.beginPath();\n".format(self.current_path, " " * self.indent))
            # do not clear params. In case we have a newpath moveto combo there could be
            # parameters in stack which need to be processed

    @path_required
    def moveto(self):
        """
        Move current path to position contained in parsed parameters
        """
        #TODO: rmoveto should be the relative one. Confusion???
        self.write("{0}.moveTo({1});".format(self.current_path,
                                             "{x}, {y}".format(**self.apply_matrix_transform(Point(self.params)))))

    @path_required
    def lineto(self):
        """
        Draw a line from current point to the position in parsed parameters
        """
        #TODO: rlineto should be the relative one. Confusion???
        self.write("{0}.lineTo({1});".format(self.current_path,
                                             "{x}, {y}".format(**self.apply_matrix_transform(Point(self.params)))))

    @path_required
    def curveto(self):
        """
        Draw a curve passing for the parsed parameters
        """
        self.write("{0}.bezierCurveTo({1}, {2}, {3});".format(self.current_path,
                                                              "{x}, {y}".format(**self.apply_matrix_transform(
                                                                  Point(self.params[0:2]))),
                                                              "{x}, {y}".format(**self.apply_matrix_transform(
                                                                  Point(self.params[2:4]))),
                                                              "{x}, {y}".format(**self.apply_matrix_transform(
                                                                  Point(self.params[4:6])))))

    @path_required
    def closepath(self):
        """
        Close current path
        """
        self.write("{0}.closePath();".format(self.current_path))

    @path_required
    def stroke(self):
        """
        Draw the path
        """
        self.write("{0}.stroke();".format(self.current_path))

    @path_required
    def setmiterlimit(self):
        """
        Set the miter limit of the current path
        """
        self._set_property(self.style_dict["setmiterlimit"], self.params[0])

    @path_required
    def setlinewidth(self):
        """
        Set the line width of the current path
        """
        self._set_property(self.style_dict["setlinewidth"], self.params[0])

    @path_required
    def setlinecap(self):
        """
        Set the line cap of the current path
        """
        style = ("butt", "round", "square")[int(self.params[0])]
        self._set_property(self.style_dict["setlinecap"], style)

    @path_required
    def setlinejoin(self):
        """
        Set the line join of the current path
        """
        style = ("miter", "round", "bevel")[int(self.params[0])]
        self._set_property(self.style_dict["setlinejoin"], style)

    @path_required
    def setdash(self):
        """
        Set the dash style to the current path
        """
        print("//Not implemented yet setdash: {}".format(self.params))
        self.clear_params_stack()

    @path_required
    def fill(self):
        """
        In postscript the fill command clears the current path
        """
        self.write("{0}.fill();".format(self.current_path))

    def setgray(self):
        """
        Set the current color to the passed gray tonality
        """
        #TODO implement grayscale mapping
        self.current_state.color = "black"
        self.clear_params_stack()

    def setrgbcolor(self):
        """
        Set the current color to an RGB combination
        """
        #TODO implement color mapping
        self.current_state.color = "black"
        self.clear_params_stack()

    def gsave(self):
        """
        Save the current state and clear the path
        """
        self.states.append(copy.copy(self.current_state))
        self.write("{0}.save();".format(self.current_path))

    def grestore(self):
        """
        Restore the state "popping" it from the stack
        """
        self.write("{0}.restore();".format(self.current_path))

    def showpage(self):
        """
        This ends the page drawing
        """
        self.write("return {{name:{0},width:{1}, height:{2},path:{3}}};".format(self.shape_name,
                                                                                self.rectclip["width"],
                                                                                self.rectclip["height"],
                                                                                self.current_path))


if __name__ == "__main__":
    p = PaperParser(os.path.join(os.path.dirname(__file__), "/samples/Zodiac/cancer.ps"), sys.stdout)
    p.run()