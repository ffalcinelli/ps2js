Intro
=====

ps2js is a python tool to translate postscript into html5 canvas or paper.js code.

It works with simple PostScripts images generated with cairo (eg. by converting an SVG with Inkscape).

Getting started
===============

Get the code by cloning the repo

```bash
$ git clone git://github.com/ffalcinelli/ps2js.git
```

Launch the script to read the help

```bash
$ /ps2js.py -h
  usage: ps2js.py [-h] [-o OUTPUT_DIR] [-f {paperjs,html5}]
                  ps_files [ps_files ...]

  Transform a PostScript into JavaScript

  positional arguments:
    ps_files

  optional arguments:
    -h, --help            show this help message and exit
    -o OUTPUT_DIR, --output-dir OUTPUT_DIR
                          Directory where results are to be stored
    -f {paperjs,html5}, --format {paperjs,html5}
                          The format of the output code

  Good luck! :-)
```

Warm up!
--------

There are some postscripts in the samples folder. You can try to transform them by running

```bash
$ ./ps2js.py -o output -f paperjs samples/Zodiac
```

And change the index.html to see the result


License
-------

Not yet defined. I'm not so done for legal terms, but I think GPL is a good one.

Have to check for some usage of code (e.g. _AttributeDict from fabric) if is covered... Help me out! :-)

TODOs
-----

1. ~~Make a TODO list~~
2. Find a way to programmatically test the results
3. Support other PS commands
4. Improve the current ones