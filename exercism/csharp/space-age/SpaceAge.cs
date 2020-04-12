using System;

public class SpaceAge
{
    private int age;
    static private double earthYear = 31557600;
    static private double mercuryYear = earthYear * 0.2408467;
    static private double venusYear = earthYear * 0.61519726;
    static private double marsYear = earthYear * 1.8808158;
    static private double jupiterYear = earthYear * 11.862615;
    static private double saturnYear = earthYear * 29.447498;
    static private double uranusYear = earthYear * 84.016846;
    static private double neptuneYear = earthYear * 164.79132;

    public SpaceAge(int ageInSeconds)
    {
        age = ageInSeconds;
    }

    public double OnEarth() => age / earthYear;

    public double OnMercury() => age / mercuryYear;

    public double OnVenus() => age / venusYear;

    public double OnMars() => age / marsYear;

    public double OnJupiter() => age / jupiterYear;

    public double OnSaturn() => age / saturnYear;

    public double OnUranus() => age / uranusYear;

    public double OnNeptune() => age / neptuneYear;
}
