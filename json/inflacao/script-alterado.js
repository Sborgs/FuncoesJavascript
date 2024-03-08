document.addEventListener("DOMContentLoaded", async function(){  
    const conteudo = document.getElementById("conteudo");

    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v3/agregados/1705/variaveis?view=OLAP&localidades=BR');

    const dados = await resposta.json();    

    dados.forEach( function(inflacao) {
        
        const divBlocoInflacao = document.createElement("div"); //criando a div
        divBlocoInflacao.classList.add("bloco-inflacao"); //atribuindo o nome de uma classe

        const ulSubtitulo = document.createElement("ul");
        // subtitulo.id = "subtitulo";
        ulSubtitulo.setAttribute("id","subtitulo"); // faz a mesma coisa do subtitulo.id = "subtitulo"

        const liSubtitulo = document.createElement("li");
        liSubtitulo.textContent = `${inflacao.medida} - (${inflacao.unidade})`;

        ulSubtitulo.appendChild(liSubtitulo);

        divBlocoInflacao.appendChild(ulSubtitulo);

            const olResultados = document.createElement("ol");

            const serieData = inflacao.resultados[0].series[0].serie;

            for (const anoMes in serieData){
                
                const liserie = document.createElement("li");

                liserie.textContent = `${anoMes} - ${serieData[anoMes]}`;

                olResultados.appendChild(liserie);
            }

           ulSubtitulo.appendChild(olResultados);

        conteudo.appendChild(divBlocoInflacao);
    });
}
) 
  