from shared import _AttributeDict

__author__ = 'fabio'
#[ a b c d h k ]
transform_matrix = [1, 0, 0, 1, 0, 0]


def matrix_transform(point, matrix=transform_matrix):
    """
    Apply transformation matrix to a point
    """
    x = matrix[0] * point.x + matrix[2] * point.y + matrix[4]
    y = matrix[1] * point.x + matrix[3] * point.y + matrix[5]
    return Point(x, y)


class Point(_AttributeDict):
    """
    A Paper.js point.
    Provides methods to do some math operations
    and to produce JS statements.
    """

    def _get_xy(self, other):
        """
        This is an utility function to support
        better polimorphic parameters passing
        """
        if hasattr(other, "__getitem__"):
            if "x" in other and "y" in other:
                return float(other["x"]), float(other["y"])
            elif hasattr(other, "__iter__"):
                return float(other[0]), float(other[1])

    def __init__(self, *args, **kwargs):
        super(Point, self).__init__()
        self.name = kwargs.get("name", "p")
        if args:
            if len(args) == 1:
                self.x, self.y = self._get_xy(args[0])
            else:
                self.x, self.y = self._get_xy(args)
        else:
            self.x, self.y = self._get_xy(kwargs)

    def __add__(self, other):
        """
        List / tuple / dict are welcome :-)
        """
        x, y = self._get_xy(other)
        return Point(self.x + x, self.y + y)


    def __sub__(self, other):
        x, y = self._get_xy(other)
        return Point(self.x - x, self.y - y)

    def __mul__(self, other):
        x, y = self._get_xy(other)
        return Point(self.x * x, self.y * y)

    def __div__(self, other):
        x, y = self._get_xy(other)
        return Point(self.x / x, self.y / y)


    def js_new(self):
        """
        Return the JS statement to represent a Point creation
        """
        return "var {name} = new Point({x}, {y})".format(**self)

    def js_add(self, point):
        """
        Return the JS statement to represent a Point addition
        """
        return "[{p}.x{signx}{x},{p}.y{signy}{y}]".format(p=self.name,
                                                          signx="+" if point.x > 0 else ("-" if point.x < 0 else ""),
                                                          signy="+" if point.y > 0 else ("-" if point.y < 0 else ""),
                                                          x=abs(point.x) if abs(point.x) else "",
                                                          y=abs(point.y) if abs(point.y) else "")

    def js_sub(self, point):
        """
        Return the JS statement to represent a Point subtraction
        """
        return "[{p}.x{signx}{x}, {p}.y{signy}{y}]".format(p=self.name,
                                                           signx="-" if point.x > 0 else ("+" if point.x < 0 else ""),
                                                           signy="-" if point.y > 0 else ("+" if point.y < 0 else ""),
                                                           x=abs(point.x) if abs(point.x) else "",
                                                           y=abs(point.y) if abs(point.y) else "")

    def __str__(self):
        """
        The JS representation of a Point.
        I like this one for python also :-)
        """
        return "[{x}, {y}]".format(x=self.x, y=self.y)