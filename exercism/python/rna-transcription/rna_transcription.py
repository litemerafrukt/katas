def transcribe(nucleotide: str) -> str:
    complement = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
    return complement.get(nucleotide, '')


def to_rna(dna: str) -> str:
    rna = [transcribe(n) for n in dna]
    return ''.join(rna) if '' not in rna else ''
