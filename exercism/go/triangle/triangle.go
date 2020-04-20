// Package triangle contains function to determine type of triangle,
// equilateral, isosceles or scalene
package triangle

import "math"

// Kind of triangle
type Kind string

const (
	// NaT = not a triangle
	NaT = "NaT"
	// Equ = equilateral
	Equ = "Equ"
	// Iso = isosceles
	Iso = "Iso"
	// Sca = scalene
	Sca = "Sca"
)

// KindFromSides determens Kind of triangle from triangle sides
func KindFromSides(a, b, c float64) Kind {
	switch {
	case isInvalidTriangle(a, b, c):
		return NaT
	case allSidesAlike(a, b, c):
		return Equ
	case twoSidesAlike(a, b, c):
		return Iso
	default: // no sides the same
		return Sca
	}
}

func allSidesAlike(a, b, c float64) bool {
	return a == b && a == c && b == c
}

func twoSidesAlike(a, b, c float64) bool {
	return a == b || a == c || b == c
}

func isInvalidTriangle(a, b, c float64) bool {
	return anySideZeroOrLess(a, b, c) ||
		violatesInequality(a, b, c) ||
		hasInvalidNumber(a, b, c)
}

func anySideZeroOrLess(sides ...float64) bool {
	for _, side := range sides {
		if side <= 0 {
			return true
		}
	}

	return false
}

func violatesInequality(a, b, c float64) bool {
	return a+b < c || a+c < b || b+c < a
}

func hasInvalidNumber(sides ...float64) bool {
	for _, side := range sides {
		if math.IsNaN(side) || math.IsInf(side, 0) {
			return true
		}
	}

	return false
}
