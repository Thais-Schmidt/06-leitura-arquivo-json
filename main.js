var url = "dados/cnpj.json";

function dadosJson() {

    $.getJSON(url)
        .done(function (data) {
            document.getElementById('razaoSocial').innerHTML = data.receitaFederal['razaoSocial'];
            document.getElementById('nomeFantasia').innerText = data.receitaFederal['nomeFantasia'];
            document.getElementById('naturezaJuridica').innerText = data.receitaFederal['naturezaJuridica'];             

            // var dados = data.receitaFederal;

            for (i in data.receitaFederal) {
                console.log(i)
                document.getElementById('cnpj').value = data['cnpj'];
                var campo = document.getElementById(i);
                console.log(campo)
                if (document.getElementById(i).id == i) {
                    // console.log(i)
                    document.getElementById(i).value = data.receitaFederal[i];
                }
            }


        })
        .fail(function () {
            alert("Ocorreu um erro na leitura do arquivo Json.");
        })
}

dadosJson();
