using System;
using System.Collections.Generic;

public static class PascalsTriangle
{
    public static IEnumerable<IEnumerable<int>> Calculate(int rows)
    {
        if (rows == 0) return new int[0][];

        var triangle = new int[rows][];

        triangle[0] = new[] { 1 };

        for (var i = 1; i < rows; i++)
        {
            triangle[i] = nextRow(triangle[i - 1]);
        }

        return triangle;
    }

    public static int[] nextRow(int[] fromRow)
    {
        var nextRow = new int[fromRow.Length + 1];

        nextRow[0] = 1;

        for (var i = 1; i < fromRow.Length; i++)
        {
            nextRow[i] = (fromRow[i - 1] + fromRow[i]);
        }
        nextRow[nextRow.Length - 1] = 1;

        return nextRow;
    }
}
