/*
Package etl contains function to convert
from legacy point to letters map into
a letter to point map.
*/
package etl

import "strings"

// Transform from legacy point to letters map to a
// letter to point map
func Transform(ptls map[int][]string) map[string]int {
	ltp := make(map[string]int)

	for p, ls := range ptls {
		for _, l := range ls {
			ltp[strings.ToLower((l))] = p
		}
	}

	return ltp
}
