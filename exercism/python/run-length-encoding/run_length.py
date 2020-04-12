from itertools import groupby


def pipe(data, *functions):
    for function in functions:
        data = function(data)
    return data


def char_groups(char_group):
    char, char_iterable = char_group
    return (char, len(list(char_iterable)))


def stringify_count_tuple(count_tuple):
    char, nr_of_char = count_tuple
    return (str(nr_of_char) if nr_of_char > 1 else '') + str(char)


def encode(data: str) -> str:
    return pipe(
        groupby(data),
        lambda groups: map(char_groups, groups),
        lambda char_tuples: map(stringify_count_tuple, char_tuples),
        lambda encode_as_iterable: "".join(list(encode_as_iterable))
    )


def decode(data: str) -> str:
    return ''

# import re

# regex = r"([1-9]*)(\S){1}"

# test_str = "⏰3⚽2⭐⏰"

# matches = re.finditer(regex, test_str, re.IGNORECASE)

# for matchNum, match in enumerate(matches):
#     matchNum = matchNum + 1

#     print ("Match {matchNum} was found at {start}-{end}: {match}".format(matchNum = matchNum, start = match.start(), end = match.end(), match = match.group()))

#     for groupNum in range(0, len(match.groups())):
#         groupNum = groupNum + 1

#         print ("Group {groupNum} found at {start}-{end}: {group}".format(groupNum = groupNum, start = match.start(groupNum), end = match.end(groupNum), group = match.group(groupNum)))
