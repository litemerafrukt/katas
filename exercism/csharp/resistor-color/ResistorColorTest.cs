// This file was auto-generated based on version 1.0.0 of the canonical data.

using System;
using Xunit;

public class ResistorColorTest
{
    [Fact]
    public void Black()
    {
        Assert.Equal(0, ResistorColor.ColorCode("black"));
    }

    [Fact]
    public void White()
    {
        Assert.Equal(9, ResistorColor.ColorCode("white"));
    }

    [Fact]
    public void Orange()
    {
        Assert.Equal(3, ResistorColor.ColorCode("orange"));
    }

    [Fact]
    public void Brown()
    {
        Assert.Equal(1, ResistorColor.ColorCode("brown"));
    }

    [Fact]
    public void Red()
    {
        Assert.Equal(2, ResistorColor.ColorCode("red"));
    }

    [Fact]
    public void Yellow()
    {
        Assert.Equal(4, ResistorColor.ColorCode("yellow"));
    }

    [Fact]
    public void Green()
    {
        Assert.Equal(5, ResistorColor.ColorCode("green"));
    }

    [Fact]
    public void Blue()
    {
        Assert.Equal(6, ResistorColor.ColorCode("blue"));
    }

    [Fact]
    public void Violet()
    {
        Assert.Equal(7, ResistorColor.ColorCode("violet"));
    }

    [Fact]
    public void Gray()
    {
        Assert.Equal(8, ResistorColor.ColorCode("grey"));
    }

    [Fact]
    public void Colors()
    {
        Console.WriteLine(string.Join(", ", ResistorColor.Colors()));
        Assert.Equal(new[] { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" }, ResistorColor.Colors());
    }

    [Fact(Skip = "for now")]
    public void CantModifyColors()
    {
        var colors = ResistorColor.Colors();

        colors[0] = "whatever";

        Assert.Equal(
            new[] { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" },
            ResistorColor.Colors()
        );

        // Assert.ThrowsAny<Exception>(() => colors[0] = "whatever");
    }
}
