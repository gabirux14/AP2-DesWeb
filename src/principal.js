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

  if (hex_md5(senhaUser) === "e10adc3949ba59abbe56e057f20f883e") {
    window.sessionStorage.setItem("logado", "logado");
    window.location = "listas.html";
  } else {
    alert("Senha incorreta!");
  }
};

