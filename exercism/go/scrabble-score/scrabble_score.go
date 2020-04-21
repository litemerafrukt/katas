/*
Package scrabble contains a function to calculate scrabble score
*/
package scrabble

import (
	"log"
	"strings"
)

var scores = map[rune]int{
	'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
	'D': 2, 'G': 2,
	'B': 3, 'C': 3, 'M': 3, 'P': 3,
	'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
	'K': 5,
	'J': 8, 'X': 8,
	'Q': 10, 'Z': 10,
}

// Score calculates the scrabble score from a string
func Score(str string) int {
	sum := 0

	for _, letter := range strings.ToUpper(str) {
		score, ok := scores[letter]

		if !ok {
			log.Fatalf("No score found for: %q", letter)
		}

		sum += score
	}

	return sum
}
