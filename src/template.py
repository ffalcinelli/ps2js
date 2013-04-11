from jinja2 import Environment, PackageLoader

__author__ = 'fabio'


def generate_template(output_format="paperjs", shape_name=None):
    """
    Generate an html file to see the parsing results
    """
    jinja_env = Environment(loader=PackageLoader('ps2js', '../templates'))
    template = jinja_env.get_template('{}.html'.format(output_format))
    return template.render(shape_name=shape_name)


if __name__ == "__main__":
    print(generate_template(shape_name="gnu"))