from functools import reduce


def distance(first_strand: str, second_strand: str) -> int:
    if len(first_strand) != len(second_strand):
        raise ValueError('Different length of strands.')

    count_mutation = lambda m, t: m + 1 if t[0] != t[1] else m
    return reduce(count_mutation, zip(first_strand, second_strand), 0)
