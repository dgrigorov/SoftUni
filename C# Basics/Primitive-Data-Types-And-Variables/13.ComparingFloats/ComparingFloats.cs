using System;

class ComparingFloats
{
    static void Main(string[] args)
    {
        //Read numbers from the console
        Console.WriteLine("Enter the first number: ");
        double firstNum = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second number: ");
        double secondNum = double.Parse(Console.ReadLine());

        bool compare = (Math.Abs(firstNum - secondNum) < 0.000001);

        if (compare)
        {
            Console.WriteLine((compare) + ": Numbers are equal with a precision of 0.000001.");
        }
        else
        {
            Console.WriteLine((compare) + ": Numbers are not equal with a precision of 0.000001.");
        }
    }
}