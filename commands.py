__author__ = 'fabio'


class Command(object):
    parameters = []

    def __init__(self, parameters):
        self.parameters.extend(parameters)


class GSave(Command):
    """
    /q { gsave } bind def
    """
    ps_aliases = ["q", "gsave"]


class GRestore(Command):
    """
    /Q { grestore } bind def
    """
    ps_aliases = ["Q", "grestore"]


class ArrayStore(Command):
    """
    /cm { 6 array astore concat } bind def
    """
    ps_aliases = ["cm"]


class SetLineWidth(Command):
    """
    /w { setlinewidth } bind def
    """


class MoveTo(Command):
    ps_aliases = ["m", "moveto"]

    def __str__(self):
        return ".moveTo(%s)" % ",".join(self.parameters)


class LineTo(Command):
    ps_aliases = ["m", "lineTo"]

    def __str__(self):
        return ".lineTo(%s)" % ",".join(self.parameters)

cmd_dict = {"q": GSave,
            "Q": GRestore,
            "cm": ArrayStore,
}
