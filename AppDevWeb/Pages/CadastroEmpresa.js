function salvarEmpresa() {
    document.getElementById('ovTXT_CNPJEmpresa').disabled = false;
    $.ajax({
        type: "POST",
        url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            limparCamposEmpresa();
            carregarEmpresas();
        },
        failure: function (msg) { alert(msg); },
        data: JSON.stringify({
            emp: {
                CNPJ: $("#ovTXT_CNPJEmpresa").val(),
                NomeFantasia: $("#ovTXT_NomeFantasiaEmpresa").val(),
                RazaoSocial: $("#ovTXT_RazaoSocialEmpresa").val()
            },
        })
    });
}  

function limparCamposEmpresa() {
    $("#ovTXT_CNPJEmpresa").val("");
    $("#ovTXT_NomeFantasiaEmpresa").val("");
    $("#ovTXT_RazaoSocialEmpresa").val("");

}

function carregarEmpresas() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Empresas.asmx/ListarEmpresas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#grid_empresas tbody").html("");
            var empresas = data.d;
            for (var i = 0; i < empresas.length; i++) {
                $("#grid_empresas tbody").append("<tr>" +
                    "<td>" + empresas[i].CNPJ + "</td>" +
                    "<td>" + empresas[i].NomeFantasia + "</td>" +
                    "<td>" + empresas[i].RazaoSocial + "</td>" +
                    "<td>" +
                    " <button type='button' " +
                    "         class='btn btn-outline-primary btn-editar_emp' " +
                    "         data-codigo='" + empresas[i].CNPJ + "'" +
                    ">Editar</button> " +
                    " <button type='button' " +
                    "         class='btn btn-outline-danger btn-remover_emp' " +
                    "         data-codigo='" + empresas[i].CNPJ + "'" +
                    ">Remover</button > " +
                    "</td > " +
                    "</tr>");
            }

            adicionaEventoEditarEmpresa();
            adicionaEventoRemoverEmpresa();
        },
        failure: function (msg) { alert(msg); },
        data: {}
    });
}
function adicionaEventoEditarEmpresa() {
    $(document).on("click", ".btn-editar_emp", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/GetEmpresa",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var Empresa = data.d;
                $("#ovTXT_CNPJEmpresa").val(Empresa.CNPJ);
                $("#ovTXT_NomeFantasiaEmpresa").val(Empresa.NomeFantasia);
                $("#ovTXT_RazaoSocialEmpresa").val(Empresa.RazaoSocial);
                document.getElementById('ovTXT_CNPJEmpresa').disabled = true;

            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ CNPJ: codigo })
        });
    });
}
function adicionaEventoRemoverEmpresa() {
    $(document).on("click", ".btn-remover_emp", function () {
        var codigo = $(this).data("codigo");
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/RemoverEmp",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                carregarEmpresas();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({ CNPJ: codigo })
        });
    });
}



$(document).ready(function () {
    carregarEmpresas();

    $(document).on("click", "#btn_salvar_emp", salvarEmpresa);
});