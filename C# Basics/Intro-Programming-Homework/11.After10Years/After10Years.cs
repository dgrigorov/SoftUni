using System;

class After10Years
{
    static void Main()
    {
        Console.WriteLine("Enter your birth date: (yyyy/mm/dd):");
        DateTime BirthDay = DateTime.Parse(Console.ReadLine());
        int age = (int)((DateTime.Now - BirthDay).TotalDays / 365.242199);

        Console.WriteLine("You are " + age + " year(s) old");
        Console.WriteLine("After ten years you will be at the age of " + (age + 10));
    }
}

