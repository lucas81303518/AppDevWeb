<%@ Page Title="" Language="C#" MasterPageFile="~/Page.Master"
    AutoEventWireup="true" CodeBehind="CadastroEmpresa.aspx.cs"
    Inherits="AppDevWeb.Pages.CadastroEmpresa" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
        <script src="CadastroEmpresa.js"
            type="text/javascript"></script>

        <div class="form-group">
            <h2>Cadastrando Empresa</h2>
            <div class="row">
            
                <div class="col-md-4">
                    <label>CNPJ:</label>
                    <input type="text"
                        id="ovTXT_CNPJEmpresa"
                        class="form-control" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <label>Nome Fantasia:</label>
                    <input type="text"
                        id="ovTXT_NomeFantasiaEmpresa"
                        class="form-control" />
                </div>
                <div class="col-md-6">
                    <label>Razão Social:</label>
                    <input type="text"
                        id="ovTXT_RazaoSocialEmpresa"
                        class="form-control">
                </div>

            </div>
            <div class="row pull-right" style="padding-top: 20px;">
                <div class="col-md-12">
                    <button type="button"
                        class="btn btn-outline-success"
                        id="btn_salvar_emp">
                        Salvar</button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <table id="grid_empresas" class="table">
                        <thead>
                            <tr>
                                <th>Cnpj</th>
                                <th>Nome Fantasia</th>
                                <th>Razão Social</th>
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
