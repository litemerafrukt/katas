#
# Skeleton file for the Python "Bob" exercise.
#


def hey(what: str) -> str:
    if what.isupper():
        return 'Whoa, chill out!'
    if what.strip().endswith('?'):
        return 'Sure.'
    if not what.strip():
        return 'Fine. Be that way!'

    return 'Whatever.'
