using System;

class FloatOrDouble
{
    static void Main()
    {
        float firstFloat = 12.345f;
        float secondFloat = 3456.091f;

        double firstDouble = 34.567839023;
        double secondDouble = 8923.1234857;

        Console.WriteLine("First float --> {0}" + "\n" + "Second float --> {1}", firstFloat, secondFloat);
        Console.WriteLine("First double --> {0}" + "\n" + "Second double --> {1}", firstDouble, secondDouble);
    }
}