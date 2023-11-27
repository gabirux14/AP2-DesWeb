window.onload = () => {
  var estaLogado = window.sessionStorage.getItem("logado");
  var estaNoLogin = window.location.href.indexOf("login") > -1;

  if (!estaNoLogin && !estaLogado) window.location = "login.html";
};

function sair() {
  window.sessionStorage.removeItem("logado");
  window.location.href = "login.html";
}

function logar(){
  let senhaUser = document.getElementById('entrada-senha').value;

  if (hex_md5(senhaUser) === "30622a5a76d681274b8b33c23192cd8b") {
    window.sessionStorage.setItem("logado", "logado");
    window.location = "listas.html";
  } else {
    alert("Senha incorreta!");
  }
};

