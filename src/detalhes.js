
setTimeout(function() {
  var queryStringGet = new URLSearchParams(document.location.search);
  var id = parseInt(queryStringGet.get('id'));
  GetJogador(id)
}, 1000)



function mostrarDadosJogador(jogador) {
    var html = `
            <article class="jogador">
                <div id="detalhes">
                    <p class="text">Nome completo: ${jogador.nome_completo}</p> 
                    <p class="text">Idade:  ${jogador.nascimento}</p> 
                    <p class="text">Altura: ${jogador.altura}</p> 
                    <p class="text">Elenco: ${jogador.elenco}</p> 
                    <p class="text">Posição: ${jogador.posicao}</p> 
                    <p class="text">Descrição: ${jogador.descricao}</p>
                </div>
                <div id="img-jogador">
                    <h2>${jogador.nome}</h2>
                    <img src="${jogador.imagem}" alt="${jogador.nome} atleta de futebol do Botafogo.">
                </div>
            </article>`;
      
    document.getElementById("elenco").innerHTML = html;
    document.getElementById("carregando").innerHTML = '';
}
function GetJogador(id) {
  fetch(`https://botafogo-atletas.mange.li/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      mostrarDadosJogador(data);
    })
    .catch(function (erro) {
      alert('Não foi possível obter os dados no momento, tente novamente.')
    });
}