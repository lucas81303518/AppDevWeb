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
    public class Filiais : System.Web.Services.WebService, IRequiresSessionState
    {
        private EmpresaService ControllerFilial
        {
            get
            {
                if (HttpContext.Current
                               .Session["CONTROLLER_FILIAL"] == null)
                    HttpContext.Current
                               .Session["CONTROLLER_FILIAL"] = new EmpresaService();

                return HttpContext.Current
                               .Session["CONTROLLER_FILIAL"] as EmpresaService;
            }
            set
            {
                HttpContext.Current.Session["CONTROLLER_FILIAL"] = value;
            }
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json,
                      UseHttpGet = true)]
        public List<Filial> ListarFiliais()
        {
            return ControllerFilial.GetFiliais();
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public Filial GetFilial(long CNPJ)
        {
            return ControllerFilial.GetFilial(CNPJ);
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string RemoverFilial(long CNPJ)
        {
            ControllerFilial.RemoverFilial(CNPJ);
            return "OK";
        }

        [WebMethod(EnableSession = true)]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
      
        public string ChamadaGetFilial(string a, string b)
        {
            return $"{a}, {b}";
        }
    }
}
