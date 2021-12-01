using AppDevWeb.Controller.Repositorios;
using AppDevWeb.Modelo.Entidades;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using System.Web.SessionState;

namespace AppDevWeb.API
{
    [ScriptService]
    public class Empresas : System.Web.Services.WebService, IRequiresSessionState
    {
        private EmpresaService ControllerEmpresa
        {
            get
            {
                if (HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] == null)
                    HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] = new EmpresaService();

                return HttpContext.Current
                               .Session["CONTROLLER_EMPRESA"] as EmpresaService;
            }
            set
            {
                HttpContext.Current.Session["CONTROLLER_EMPRESA"] = value;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public List<Empresa> ListarEmpresas()
        {
            return ControllerEmpresa.GetEmpresas();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Empresa GetEmpresa(long CNPJ)
        {
            return ControllerEmpresa.GetEmpresa(CNPJ);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string RemoverEmp(long CNPJ)
        {
            ControllerEmpresa.RemoverEmpresa(CNPJ);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string SalvarEmpresa(Empresa emp)
        {
            ControllerEmpresa.SalvarEmpresa(emp);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public string ChamadaGetEmpresa(string a, string b)
        {
            return $"{a}, {b}";
        }
    }
        
}
