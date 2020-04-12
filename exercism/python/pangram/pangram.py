def is_pangram(phrase: str) -> bool:
    alphabet = set('abcdefghijklmnopqrstuvxyz')
    return alphabet <= set(phrase.lower())
