defmodule NucleotideCount do
  @nucleotides [?A, ?C, ?G, ?T]

  @spec count([char], char) :: non_neg_integer
  def count(strand, nucleotide) do
    Enum.count(strand, fn (n) -> n == nucleotide end)
  end

  @spec histogram([char]) :: map
  def histogram(strand) do
    Map.new(@nucleotides, fn (n) -> {n, count(strand, n)} end)
  end
end
