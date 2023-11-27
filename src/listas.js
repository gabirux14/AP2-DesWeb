function montarTela(data) {
  document.getElementById("elenco").innerHTML = '';
  for (var i = 0; i < data.length; i++) {
    var jogador = data[i];
    var card_do_jogador = `
            <article id="${jogador.id}" onclick="navega()" data-id="${jogador.id}" class="jogador">
                <h2>${jogador.nome}</h2>
                <img src="${jogador.imagem}" alt="${jogador.nome}.">
                <h3>Saiba mais</h3>
            </article>`;

    document.getElementById("elenco").innerHTML  += card_do_jogador;
  }
  document.getElementById("text").style.display = 'none';
}

function navega(){
    window.location = 'detalhe.html?id=' + event.target.closest("article").dataset.id;
}

function getLista(tipo) {
  document.getElementById("text").innerHTML = "Carregando!";
  fetch(`https://botafogo-atletas.mange.li/${tipo}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      montarTela(data);
    })
    .catch(function (erro) {
      alert('Não foi possível obter os dados no momento, tente novamente!')
    });
}

document
  .getElementById("select-elenco")
  .addEventListener("change", (event) => {
    getLista(event.target.value);
  });