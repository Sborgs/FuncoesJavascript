document.addEventListener("DOMContentLoaded", async function(){
    const listaMunicipios = document.getElementById("atividades-economicas");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v2/cnae/classes');

    const dados = await resposta.json();

    dados.forEach( function(AtivEco){
        const li = document.createElement('li');

        li.textContent = `${AtivEco.id}`;
        //li.textContent = municipio.nome+'/'+'UF';

        listaMunicipios.appendChild(li);
        
    });
}
)

//const listaAtivEco = document.getElementById()