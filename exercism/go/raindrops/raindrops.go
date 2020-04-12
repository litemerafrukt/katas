/*
Package raindrops converts numbers to rainspeak
*/
package raindrops

import (
	"strconv"
)

// Convert returns the rainspeak for a perticular number
func Convert(number int) string {
	result := ""

	if number%3 == 0 {
		result += "Pling"
	}

	if number%5 == 0 {
		result += "Plang"
	}

	if number%7 == 0 {
		result += "Plong"
	}

	if result == "" {
		result = strconv.Itoa(number)
	}

	return result
}
