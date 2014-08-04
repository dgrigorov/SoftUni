using System;
using System.Text;

class IsoscelesTriangle
{
    static void Main()
    {
        Console.OutputEncoding = Encoding.UTF8;

        char copyRight = '©';
        char emptySpace = ' ';


        int rows = 4;
        int columns = 5;
        int cSymbol = 1;

        for (int i = 0; i < rows; i++)
        {
            for (int blank = 0; blank < columns - i; blank++)
            {
                Console.Write(emptySpace);
            }
            for (int symbol = 0; symbol < cSymbol; symbol++)
            {
                Console.Write(copyRight);
            }

            cSymbol += 2;
            Console.WriteLine();
        }
    }
}