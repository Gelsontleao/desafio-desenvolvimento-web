const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const cidadeInput = document.querySelector("#cidade");
const saudeSelect = document.querySelector("#saude");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Verifica se o nome está vazio
  if (nameInput.value === "") {
    alert("Favor preencher seu nome!");
    return;
  }

  //Verifica se o e-mail está vazio
  if (emailInput.value === "") {
    alert("Favor preencher seu e-mail!");
    return;
  }

  //Verifica se a cidade está vazia
  if (cidadeInput.value === "") {
    alert("Favor preencher sua cidade!");
    return;
  }

  //Verifica se a seleção foi realizada
  if (saudeSelect.value === "") {
    alert("Favor selecionar Sim ou Não");
    return;
  }

  //Verifica se o TextArea está preenchido
  if (messageTextarea.value === "") {
    alert("Favor preencher uma mensagem!");
    return;
  }

  //Se tudo estiver Ok envia o formulário
  form.submit();
});
