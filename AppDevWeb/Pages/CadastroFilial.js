var todasEmpresas = [];
var isEditandoID = 0;
function salvarFilial() {

    var empresaSelecionada = JSON.parse($("#ovTXT_EmpresaPai").val());

    if (!isEditandoID) {
        if (empresaSelecionada == null) {
            alert("Não é possível adicionar uma Filial sem Empresa Pai!!");
        }

        var Filiais = empresaSelecionada.Filiais || [];
        Filiais.push(
            {
                CNPJ: $("#ovTXT_CNPJFilial").val(),
                IE: $("#ovTXT_IE").val(),
                Descricao: $("#ovTXT_DescricaoFilial").val()
            }
        )
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                limparCamposFiliais();
                carregarEmpresas();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({
                emp: {
                    Filiais: Filiais,
                    CNPJ: empresaSelecionada.CNPJ,
                    NomeFantasia: empresaSelecionada.NomeFantasia,
                    RazaoSocial: empresaSelecionada.RazaoSocial
                },
            })
        });
    } else {
        var pai = todasEmpresas.find(e => e.Filiais.findIndex(f => f.CNPJ == isEditandoID) != -1);
        var filho = pai.Filiais.find(f => f.CNPJ == isEditandoID);
        filho.IE = $("#ovTXT_IE").val(),
            filho.Descricao = $("#ovTXT_DescricaoFilial").val()

        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                limparCamposFiliais();
                carregarEmpresas();
                isEditandoID = 0;
                document.getElementById('ovTXT_EmpresaPai').disabled = false;
                document.getElementById('ovTXT_CNPJFilial').disabled = false;

            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({
                emp: pai


            })
        });
    }



}

function limparCamposFiliais() {
    $("#ovTXT_CNPJFilial").val("");
    $("#ovTXT_IE").val("");
    $("#ovTXT_DescricaoFilial").val("");
    $("#grid_filiais tbody").html("");
}


function carregarEmpresas() {
    $.ajax({
        type: "GET",
        url: "https://localhost:44332/API/Empresas.asmx/ListarEmpresas",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $("#ovTXT_EmpresaPai").html("");
            var empresas = data.d;
            todasEmpresas = empresas;
            for (var i = 0; i < empresas.length; i++) {
                $("#ovTXT_EmpresaPai").append("<option value= ' " + JSON.stringify(empresas[i]) + "'> " +
                    empresas[i].NomeFantasia +
                    "</option>");
                for (var j = 0; j < empresas[i].Filiais.length; j++) {
                    $("#grid_filiais tbody").append("<tr>" +
                        "<td>" + empresas[i].NomeFantasia + "</td>" +
                        "<td>" + empresas[i].Filiais[j].CNPJ + "</td>" +
                        "<td>" + empresas[i].Filiais[j].IE + "</td>" +
                        "<td>" + empresas[i].Filiais[j].Descricao + "</td>" +
                        "<td>" +
                        " <button type='button' " +
                        "         class='btn btn-outline-primary btn-editar_fil' " +
                        "         data-codigo='" + empresas[i].Filiais[j].CNPJ + "'" +
                        "         data-codigoPai='" + empresas[i].CNPJ + "'" +
                        ">Editar</button> " +
                        " <button type='button' " +
                        "         class='btn btn-outline-danger btn-remover_fil' " +
                        "         data-codigo='" + empresas[i].Filiais[j].CNPJ + "'" +
                        "         data-codigoPai='" + empresas[i].CNPJ + "'" +
                        ">Remover</button > " +
                        "</td > " +
                        "</tr>");
                }
            }



        },
        failure: function (msg) { alert(msg); },
        data: {}
    });
}

function adicionaEventoEditarFilial() {
    $(document).on("click", ".btn-editar_fil", function () {
  
        var codigo = $(this).data("codigo");
        var codigoPai = $(this).data("codigopai");
        var pai = todasEmpresas.find(e => e.CNPJ == codigoPai);
        var filhoIndex = pai.Filiais.findIndex(f => f.CNPJ == codigo);
        isEditandoID = pai.Filiais[filhoIndex].CNPJ;

        document.querySelector("#ovTXT_CNPJFilial").value = pai.Filiais[filhoIndex].CNPJ;
        document.querySelector("#ovTXT_IE").value = pai.Filiais[filhoIndex].IE;
        document.querySelector("#ovTXT_DescricaoFilial").value = pai.Filiais[filhoIndex].Descricao;

        document.getElementById('ovTXT_EmpresaPai').disabled = true;
        document.getElementById('ovTXT_CNPJFilial').disabled = true;
    }
    )
}

function adicionaEventoRemoverFilial() {
    $(document).on("click", ".btn-remover_fil", function () {
        var codigo = $(this).data("codigo");
        var codigoPai = $(this).data("codigopai");
        var pai = todasEmpresas.find(e => e.CNPJ == codigoPai);
        var filhoIndex = pai.Filiais.findIndex(f => f.CNPJ == codigo);
        pai.Filiais = pai.Filiais.slice(0, filhoIndex).concat(pai.Filiais.slice(filhoIndex + 1));
        $.ajax({
            type: "POST",
            url: "https://localhost:44332/API/Empresas.asmx/SalvarEmpresa",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                limparCamposFiliais();
                carregarEmpresas();
            },
            failure: function (msg) { alert(msg); },
            data: JSON.stringify({
                emp: pai
            })
        });
    });
}

$(document).ready(function () {
    carregarEmpresas();
    adicionaEventoEditarFilial();
    adicionaEventoRemoverFilial();
    $(document).on("click", "#btn_salvar_filial", salvarFilial);
});