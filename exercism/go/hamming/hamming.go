/*
Package hamming contains a function to calculate hamming distance
*/
package hamming

import "errors"

// Distance calculates the distance between two strands
func Distance(s1, s2 string) (int, error) {
	if len(s1) != len(s2) {
		return 0, errors.New("hamming distance can only be calculated for strands of equal length")
	}

	sr1 := []rune(s1)
	sr2 := []rune(s2)
	distance := 0

	for i := range sr1 {
		if sr1[i] != sr2[i] {
			distance++
		}
	}

	return distance, nil
}
