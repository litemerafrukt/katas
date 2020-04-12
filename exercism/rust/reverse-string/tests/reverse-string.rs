//! Tests for reverse-string
//!
//! Generated by [script][script] using [canonical data][canonical-data]
//!
//! [script]: https://github.com/exercism/rust/blob/b829ce2/bin/init_exercise.py
//! [canonical-data]: https://raw.githubusercontent.com/exercism/problem-specifications/master/exercises/reverse-string/canonical_data.json

use reverse::*;

/// Process a single test case for the property `reverse`
fn process_reverse_case(input: &str, expected: &str) {
  assert_eq!(&reverse(input), expected)
}

#[test]
fn test_an_empty_string() {
  process_reverse_case("", "");
}

#[test]
fn test_a_word() {
  process_reverse_case("robot", "tobor");
}

#[test]
fn test_a_capitalized_word() {
  process_reverse_case("Ramen", "nemaR");
}

#[test]
fn test_a_sentence_with_punctuation() {
  process_reverse_case("I'm hungry!", "!yrgnuh m'I");
}

#[test]
fn test_a_palindrome() {
  process_reverse_case("racecar", "racecar");
}

#[test]
fn test_wide_characters() {
  process_reverse_case("子猫", "猫子");
}

#[test]
fn test_grapheme_clusters() {
  process_reverse_case("uüu", "uüu");
}
