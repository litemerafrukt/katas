"""Exercism Hello World"""


def hello(name=''):
    """ Return Hello, <name>! or Hello, World!"""
    return 'Hello, ' + name + '!' if name else 'Hello, World!'
