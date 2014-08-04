using System;

class BankAccountData
{
    static void Main()
    {
        string fName = "Daniel";
        string mName = "Rangelov";
        string lName = "Grigorov";

        object fullName = fName + " " + mName + " " + lName;

        decimal balance = 62508.68M;
        char symbol = '$';
        string bankName = "Universe Bank";
        string numIBAN = "BG80 BNBG 9661 1020 3456 78";
        string codeBIC = "JGNSKORL";
        long cardNum1 = 4916398566336494;
        long cardNum2 = 340297789867901;
        long cardNum3 = 6011975583232662;

        object money = (balance + " " + (char)symbol);
        Console.WriteLine("Bank account record: \n \n Holder: {0} \n Bank: {1} \n Balance: {2} \n IBAN: {3} \n BIC: {4} \n", fullName, bankName, money, numIBAN, codeBIC);
        Console.WriteLine("Card Numbers: \n Visa: {0} \n American Express: {1} \n Discover: {2} \n", cardNum1, cardNum2, cardNum3);
    }
}
