using System;
using System.Linq;
using System.Collections.Generic;
using System.Collections.ObjectModel;

public static class NucleotideCount
{
    public const string Nucleotides = "ACGT";

    public static IDictionary<char, int> Count(string sequence)
    {
        if (sequence.Except(Nucleotides).Count() != 0)
        {

            throw new ArgumentException();
        }

        var finalCount = sequence.Aggregate(
            NucleotideCount.Empty(),
            (count, nucleotide) =>
            {
                count[nucleotide]++;
                return count;
            }
        );

        return new ReadOnlyDictionary<char, int>(finalCount);
    }

    private static IDictionary<char, int> Empty() =>
        new Dictionary<char, int>
        {
            ['A'] = 0,
            ['C'] = 0,
            ['G'] = 0,
            ['T'] = 0
        };
}
