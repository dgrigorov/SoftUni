using System;

class NullValuesAritmethic
{
    static void Main()
    {
        int? nullableInt = null;
        double? nullableDouble = null;

        int? nullMathInt = nullableInt + null;
        double? nullMathDouble = nullableDouble / 0;

        Console.WriteLine(nullableInt);
        Console.WriteLine(nullableDouble);
        Console.WriteLine(nullableInt - nullMathInt);
        Console.WriteLine(nullMathDouble);
    }
}