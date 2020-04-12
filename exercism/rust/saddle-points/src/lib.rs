pub fn find_saddle_points(matrix: &[Vec<u64>]) -> Vec<(usize, usize)> {
  let columns = transpose(matrix);
  let mut saddle_points: Vec<(usize, usize)> = Vec::new();

  for (row_index, row) in matrix.iter().enumerate() {
    let row_max = row.iter().max();
    for (column_index, column) in columns.iter().enumerate() {
      let column_min = column.iter().min();

      if Some(&row[column_index]) == row_max && Some(&column[row_index]) == column_min {
        saddle_points.push((row_index, column_index));
      }
    }
  }

  saddle_points
}

fn transpose(matrix: &[Vec<u64>]) -> Vec<Vec<u64>> {
  let mut transposed: Vec<Vec<u64>> = vec![vec![]; matrix[0].len()];

  for row in matrix.iter() {
    for (column_index, &value) in row.iter().enumerate() {
      transposed[column_index].push(value);
    }
  }

  transposed
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn transpose_square_matrix() {
    let input = vec![vec![1, 2], vec![3, 4]];
    let expected = vec![vec![1, 3], vec![2, 4]];
    assert_eq!(expected, transpose(&input))
  }

  #[test]
  fn transpose_rectangular_matrix() {
    let input = vec![vec![1, 2, 3], vec![4, 5, 6]];
    let expected = vec![vec![1, 4], vec![2, 5], vec![3, 6]];
    assert_eq!(expected, transpose(&input))
  }
}
