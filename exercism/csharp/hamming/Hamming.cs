using System;
using System.Linq;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        if (firstStrand.Length != secondStrand.Length)
        {
            throw new ArgumentException();
        }

        var distance =
            firstStrand.Zip(secondStrand, (first, second) => first != second)
            .Where(isDifferent => isDifferent)
            .Count();

        return distance;
    }
}
