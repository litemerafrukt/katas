/*
Package scrabble contains function to calculate scrabble score
*/
package scrabble

import (
	"errors"
	"log"
	"strings"
)

var scores = map[string]int{
	"AEIOULNRST": 1,
	"DG":         2,
	"BCMP":       3,
	"FHVWY":      4,
	"K":          5,
	"JX":         8,
	"QZ":         10,
}

func letterScore(letter rune) (int, error) {
	for letters, score := range scores {
		if strings.ContainsRune(letters, letter) {
			return score, nil
		}
	}

	return 0, errors.New("No score found")
}

// Score calculates the scrabble score from a string
func Score(str string) int {
	sum := 0

	for _, l := range strings.ToUpper(str) {
		score, err := letterScore(l)
		if err != nil {
			log.Fatal(err)
		}

		sum += score
	}

	return sum
}
