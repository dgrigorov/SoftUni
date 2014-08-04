using System;

class ExchangeVariableValues
{
    static void Main()
    {
        int a = 5;
        int b = 10;

        Console.WriteLine("Before exchange:");
        Console.WriteLine(" a --> {0}\n b --> {1}", a ,b);

        a = a + b; // 5 + 10 = 15
        b = a - b; // 15 - 10 = 5
        a = a - b; // 15 - 5 = 10
        Console.WriteLine();
        Console.WriteLine("After exchange:");
        Console.WriteLine(" a --> {0}\n b --> {1}", a, b);
    }
}