defmodule Words do
  defp add_word_map word, map do
    Map.update(map, word, 1, &(&1 + 1))
  end

  defp count_words words do
      Enum.reduce(words, Map.new, &add_word_map/2)
  end

  defp words sentence do
     Regex.scan(~r/[\p{L}\p{N}-]+/u, sentence)
      |> List.flatten
  end

  def count(sentence) do
    String.downcase(sentence)
      |> words
      |> count_words
  end
end
