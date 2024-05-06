
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let nomeRegex = /^[^0-9]{1,100}$/;
let numeroRegex = /^\d{2}9?\d{8,9}$/;
function SalvarDados() {


}

function validarCampos() {
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let numero = document.getElementById('numero');

  if (nome.value == "" || email.value == "" || numero.value == "") {
    alert("Preencha todos os campos");
  } else if (!emailRegex.test(email.value)) {
    alert("Email inválido");
  } else if (!nomeRegex.test(nome.value)) {
    alert("Nome inválido");
  } else if (!numeroRegex.test(numero.value)) {
    alert("Número inválido");
  } else {
    alert("Dados salvos com sucesso");
  }
}
