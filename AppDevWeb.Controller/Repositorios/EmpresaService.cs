using AppDevWeb.Modelo.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppDevWeb.Controller.Repositorios
{
    public class EmpresaService
    {

        public List<Empresa> empresas = new List<Empresa>();

        public void SalvarEmpresa(Empresa Emp)
        {
            if (GetEmpresa(Emp.CNPJ) == null)
                empresas?.Add(Emp);
            else
            {
                var empresa = empresas.FirstOrDefault(x => x.CNPJ == Emp.CNPJ);
                empresa.Filiais = Emp.Filiais;
                empresa.NomeFantasia = Emp.NomeFantasia;
                empresa.RazaoSocial = Emp.RazaoSocial;
            } 
                     
        }
     
        public List<Empresa> GetEmpresas()
        {            
            return empresas;
        }

        public void RemoverEmpresa(long CNPJ)
        {
            empresas = empresas.Where(o => o.CNPJ != CNPJ)
                               .ToList();
        }

        public Empresa GetEmpresa(long CNPJ)
        {
            return empresas.FirstOrDefault(o => o.CNPJ == CNPJ);
        }
 
        public Filial GetFilial(long CNPJ)
        {
            //return empre.Filiais.FirstOrDefault(o => o.CNPJ == CNPJ);
            return null;
        }
        public List<Filial> GetFiliais()
        {
            //return empre.Filiais;
            return null;

        }
        public void RemoverFilial(long CNPJ)
        {
            //empre.Filiais = empre.Filiais.Where(o => o.CNPJ != CNPJ)
            //                   .ToList();

        }
    }
}
