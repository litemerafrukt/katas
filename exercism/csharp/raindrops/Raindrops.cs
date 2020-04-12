using System;

public static class Raindrops
{
    public static string Convert(int number)
    {
        var rainspeak = "";
        rainspeak += ShouldPling(number) ? "Pling" : "";
        rainspeak += ShouldPlang(number) ? "Plang" : "";
        rainspeak += ShouldPlong(number) ? "Plong" : "";

        return rainspeak == "" ? $"{number}" : rainspeak;
    }

    private static bool ShouldPling(int number) => number % 3 == 0;
    private static bool ShouldPlang(int number) => number % 5 == 0;
    private static bool ShouldPlong(int number) => number % 7 == 0;
}
