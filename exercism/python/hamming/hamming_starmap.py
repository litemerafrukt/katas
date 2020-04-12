from itertools import starmap


def distance(first_strand: str, second_strand: str) -> int:
    if len(first_strand) != len(second_strand):
        raise ValueError('Different length of strands.')

    is_mutation = lambda fs, ss: 1 if fs != ss else 0
    return sum(starmap(is_mutation, zip(first_strand, second_strand)))
