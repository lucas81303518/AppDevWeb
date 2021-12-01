using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace teste
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, c;


            Console.WriteLine("Digite os valores para A, B e C: ");
            a = Console.Read();
            b = Console.Read();
            c = Console.Read();
            if (a + b > c && a + c > b && b + c > a)
            {
                Console.WriteLine("Formam um triângulo ");
                if (a == b && a == c)
                    Console.WriteLine("equilátero.\n");
                else
                {
                    if (a == b || a == c || b == c)
                        Console.WriteLine("isósceles.\n");
                    else
                        Console.WriteLine("escaleno.\n");
                }
            }
            else
                Console.WriteLine("Não formam um triângulo!\n");
        }
    }
}

