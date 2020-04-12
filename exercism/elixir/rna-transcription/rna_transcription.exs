defmodule RNATranscription do
  @spec convert_nucleotid(char) :: char
  def convert_nucleotid(d) do
    %{?A => ?U, ?T => ?A, ?C => ?G, ?G => ?C}
    |> Map.get(d)
  end

  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    Enum.map(dna, &convert_nucleotid/1)
  end
end
