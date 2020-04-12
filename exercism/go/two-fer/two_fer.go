package twofer

import "fmt"

// ShareWith returns a string with a name or the word you
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}

	return fmt.Sprintf("One for %s, one for me.", name)
}
