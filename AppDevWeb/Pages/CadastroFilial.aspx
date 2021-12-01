<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master"
    AutoEventWireup="true" CodeBehind="CadastroFilial.aspx.cs"
    Inherits="AppDevWeb.Pages.CadastroFilial" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
         <script src="CadastroFilial.js"
        type="text/javascript"></script>

        <div class="form-group">
            <h2>Cadastrando Filial</h2>
            <div class="row">
                 <div class="col-md-4">
                    <label>Empresa (Selecione):</label>
                    <select
                        id="ovTXT_EmpresaPai"
                        class="form-control">

                    </select>
                </div>
                <div class="col-md-4">
                    <label>CNPJ:</label>
                    <input type="text"
                        id="ovTXT_CNPJFilial"
                        class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label>Inscrição Estadual:</label>
                    <input type="text"
                        id="ovTXT_IE"
                        class="form-control" />
                </div>
                <div class="col-md-6">
                    <label>Descrição:</label>
                    <input type="text"
                        id="ovTXT_DescricaoFilial"
                        class="form-control">
                </div>
            </div>
                 <div class="row pull-right" style="padding-top: 20px;">
            <div class="col-md-12">
                <button type="button"
                    class="btn btn-outline-success"
                    id="btn_salvar_filial">
                    Salvar</button>
            </div>
        </div>
             <div class="row">
            <div class="col-md-12">
                <table id="grid_filiais" class="table">
                    <thead>
                        <tr>
                             <th>Empresa Pai</th>
                            <th>Cnpj</th>
                            <th>Inscrição Estadual</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
</asp:Content>
