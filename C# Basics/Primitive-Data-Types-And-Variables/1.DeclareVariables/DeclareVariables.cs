using System;

class DeclareVariables
    {
        static void Main()
        {
            ushort firstVariable = 52130;
            sbyte secondVariable = -115;
            int thirdVariable = 4825932;
            byte fourthVariable = 97;
            short fifthVariable = -10000;

            Console.WriteLine("{0} --> ushort", firstVariable);
            Console.WriteLine("{0} --> sbyte", secondVariable);
            Console.WriteLine("{0} --> int", thirdVariable);
            Console.WriteLine("{0} --> byte", fourthVariable);
            Console.WriteLine("{0} --> short", fifthVariable);
        }
    }