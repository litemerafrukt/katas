pub fn is_leap_year(year: u64) -> bool {
  let is_a_fourth_year = year % 4 == 0;
  let is_not_a_hundredth_year = year % 100 != 0;
  let is_a_four_hundredth_year = year % 400 == 0;

  is_a_fourth_year && (is_not_a_hundredth_year || is_a_four_hundredth_year)
}
