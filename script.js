// Seleciona o formulário e adiciona evento de envio
document.getElementById("formContato").addEventListener("submit", function(e) {

  // Impede o envio padrão do formulário
  e.preventDefault();

  // Captura valores dos campos
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  // Validação: campos vazios
  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Validação de email usando expressão regular
  let regex = /\S+@\S+\.\S+/;

  if (!regex.test(email)) {
    alert("Email inválido!");
    return;
  }

  // Simulação de envio
  alert("Mensagem enviada com sucesso!");

  // Limpa o formulário
  document.getElementById("formContato").reset();
});

// Função para alternar tema claro/escuro
function alternarTema() {
  document.body.classList.toggle("dark");
}