/*
	Package leap contains a function that determins
	if a given year is a leap year.
*/
package leap

// IsLeapYear calculates if a given year is a leap year
func IsLeapYear(year int) bool {
	isaFourthYear := year%4 == 0
	isaHundredthYear := year%100 == 0
	isaFourthHundredthYear := year%400 == 0

	return (isaFourthYear && !isaHundredthYear) || isaFourthHundredthYear
}
