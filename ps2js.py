#!/usr/bin/env python
# -*- coding: utf-8 -*-
import argparse
import os
import sys
from parser import CanvasParser, PaperParser
from shared import _AttributeDict

env = _AttributeDict({"input_dir": None,
                      "output_dir": os.path.dirname(
                          os.path.abspath(__file__)),
                      "ps_files": None,
                      "format": None,
                      "debug": 0,
                      "verbose": 0})

parser_dict = {"html5": CanvasParser, "paperjs": PaperParser}

#This will take care of all necessary parameters
def parse_options():
    """
    Handle command-line arguments. Each option will be put
    into the shared env dictionary.
    """
    #TODO: create arguments dinamycally from the env shared dictionary

    parser = argparse.ArgumentParser(description="Transform a PostScript into JavaScript",
                                     epilog="Good luck! :-)")
    parser.add_argument("ps_files", nargs="+")
    parser.add_argument("-o",
                        "--output-dir",
                        help="Directory where results are to be stored")
    parser.add_argument("-f",
                        "--format",
                        choices=parser_dict.keys(),
                        default=parser_dict.keys()[0],
                        help="The format of the output code")
    args = parser.parse_args()
    for k, v in env.items():
        env[k] = getattr(args, k, v)


def convert(ps_list, output_dir):
    """
    Convert a PostScript file into a JavaScript
    Write the resulting file into the output_dir directory.
    If a directory is passed as input, it will be scanned recursively
    for .ps files to parse.
    """

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    #    print "PS_LIST", ps_list
    #    print "OUT", output_dir

    for item in ps_list:
        if os.path.isdir(item):
            files = os.listdir(item)
            convert([os.path.join(item, f) for f in files],
                    os.path.join(output_dir, os.path.basename(item)))
        else:
            js_name, extension = os.path.splitext(os.path.basename(item))
            if extension.lower() == ".ps":
                js_filename = os.path.join(output_dir, "{0}.{1}".format(js_name, "js"))
                sys.stdout.write("Converting {0} --> {1}\n".format(item, js_filename))
                Parser = parser_dict[env.format]
                with open(js_filename, "w") as js_file:
                    Parser(item, js_file, shape_name=js_name).run()


if __name__ == "__main__":
    parse_options()
    convert(env.ps_files, env.output_dir)
