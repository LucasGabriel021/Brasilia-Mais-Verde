let formLogin = document.getElementById("form-modal--login");
let formCadastro = document.getElementById("form-modal--cadastro");

function alternarCadastro() {
     formLogin.style.display = "none";
     formCadastro.style.display = "flex";
}

function alternarLogin() {
     formCadastro.style.display = "none";
     formLogin.style.display = "flex";
}