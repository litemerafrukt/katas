using System;
using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    private List<int> scores = new List<int> { };
    public HighScores(List<int> scores)
    {
        this.scores = scores;
    }

    public List<int> Scores() => scores;

    public int Latest() => Enumerable.Last(scores);

    public int PersonalBest() => Enumerable.Max(scores);

    public List<int> PersonalTopThree() =>
        Enumerable
            .OrderByDescending(scores, score => score)
            .Take(3)
            .ToList();
}
