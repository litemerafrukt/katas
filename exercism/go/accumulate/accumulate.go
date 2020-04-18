/*
Package accumulate contains function to map strings
*/
package accumulate

type converter func(string) string

// Accumulate maps a converter function over a slice of strings
func Accumulate(ss []string, c converter) []string {
	result := make([]string, len(ss))

	for i, s := range ss {
		result[i] = c(s)
	}

	return result
}
