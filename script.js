document
  .getElementById("botaoenviar")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || email === "") {
    alert("Por favor, preencha os campos nome e email.");
  } else {
    alert("Prontinho! você receberá as novidades por email.");
  }
}
