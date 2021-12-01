using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class FilialController
    {
        public List<Filial> Filiais = new List<Filial>();

        public void Salvar(Filial Fil)
        {
            if (GetFilial(Fil.CNPJ) == null)
                Filiais?.Add(Fil);
            else
                foreach (Filial filial in Filiais)
                    if (filial.CNPJ == Fil.CNPJ)
                    {
                        filial.IE = Fil.IE;
                        filial.Descricao = Fil.Descricao;
                       
                    }
        }

        public List<Filial> GetFiliais()
        {
            return Filiais;
        }

        public void Remover(long CNPJ)
        {
            Filiais = Filiais.Where(o => o.CNPJ != CNPJ)
                               .ToList();
        }

        public Filial GetFilial(long CNPJ)
        {
            return Filiais.FirstOrDefault(o => o.CNPJ == CNPJ);
        }
    }
}
