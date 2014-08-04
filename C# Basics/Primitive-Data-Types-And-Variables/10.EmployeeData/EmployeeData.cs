using System;

class EmployeeData
{
    static void Main()
    {
        string firstName = "Daniel";
        string lastName = "Grigorov";
        object fullName = firstName + " " + lastName;
        int age = 19;
        long personalID = 8306112507;
        int employeeNumber = 27569999;

        Console.WriteLine("{0} is on {1} years old and has a personal ID {2} and employee number {3}", fullName, age, personalID, employeeNumber);
    }
}