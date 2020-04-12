# defmodule Bob do
#   def hey(input) do
#     cond do
#       String.ends_with?(input, "?") -> "Sure."
#       String.trim(input) == "" -> "Fine. Be that way!"
#       String.upcase(input) == input and
#         String.downcase(input) != input -> "Whoa, chill out!"
#       true -> "Whatever."
#     end
#   end
# end

defmodule Bob do
  def hey input do
     cond do
        nothing input  -> "Fine. Be that way!"
        question input -> "Sure."
        yell input     -> "Whoa, chill out!"
        true           -> "Whatever."
     end
  end

  defp nothing input do
    String.trim(input) == ""
  end

  defp question input do
    String.ends_with?(input, "?")
  end

  defp yell input do
    String.upcase(input) == input and
      String.downcase(input) != input
  end
end
