import re


def word_count(phrase: str) -> dict:
    words = re.findall(r'[^\W_]+', phrase.lower())
    word_set = set(words)
    word_counter = lambda word: words.count(word)
    return {word: word_counter(word) for word in word_set}
