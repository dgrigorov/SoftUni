using System;

class PrintTheASCIITable
{
    static void Main()
    {
        for (int i = 32; i < 127; i++)
        {
            Console.Write((char)i + " ");
        }
        Console.WriteLine();
    }
}