package protein

import "errors"

var (
	// ErrStop is used to indicate that a STOP codon is encountered
	ErrStop = errors.New("STOP")
	// ErrInvalidBase is used to indicate faulty codon
	ErrInvalidBase = errors.New("invalid or unknown codon")
)

// FromCodon takes a codon and returns corresponding protein
func FromCodon(codon string) (string, error) {
	switch codon {
	case "AUG":
		return "Methionine", nil
	case "UUU", "UUC":
		return "Phenylalanine", nil
	case "UUA", "UUG":
		return "Leucine", nil
	case "UCU", "UCC", "UCA", "UCG":
		return "Serine", nil
	case "UAU", "UAC":
		return "Tyrosine", nil
	case "UGU", "UGC":
		return "Cysteine", nil
	case "UGG":
		return "Tryptophan", nil
	case "UAA", "UAG", "UGA":
		return "", ErrStop
	}

	return "", ErrInvalidBase
}

// FromRNA translates a rna sequence to proteins
func FromRNA(rna string) ([]string, error) {
	var proteins []string

	for i := 0; i < len(rna); i += 3 {
		codon := rna[i:min(i+3, len(rna))]
		translated, err := FromCodon(codon)

		if err == ErrStop {
			return proteins, nil
		}

		if err != nil {
			return proteins, err
		}

		proteins = append(proteins, translated)
	}

	return proteins, nil
}

func min(x, y int) int {
	if x <= y {
		return x
	}

	return y
}
