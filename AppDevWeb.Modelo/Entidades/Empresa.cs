using System.Collections.Generic;

namespace AppDevWeb.Modelo.Entidades
{
    public class Empresa
    {
        public long CNPJ { get; set; }
        public string NomeFantasia { get; set; }
        public string RazaoSocial { get; set; }

        public List<Filial> Filiais = new List<Filial>();
      
        public Empresa()
        {

        }
    }
}