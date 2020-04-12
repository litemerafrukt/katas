pub fn raindrops(n: u32) -> String {
  let rain_speak =
    (3..=7)
      .step_by(2)
      .filter(|x| n % x == 0)
      .fold(String::from(""), |mut speak, factor| {
        speak += rain_word(factor);
        speak
      });

  match rain_speak.len() {
    0 => n.to_string(),
    _ => rain_speak,
  }
}

fn rain_word(n: u32) -> &'static str {
  match n {
    3 => "Pling",
    5 => "Plang",
    7 => "Plong",
    _ => "",
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn rain_word_pling() {
    assert_eq!(rain_word(3), "Pling")
  }

  #[test]
  fn rain_word_plang() {
    assert_eq!(rain_word(5), "Plang")
  }

  #[test]
  fn rain_word_plong() {
    assert_eq!(rain_word(7), "Plong")
  }

  #[test]
  fn rain_word_empty_string() {
    assert_eq!(rain_word(9), "")
  }
}
