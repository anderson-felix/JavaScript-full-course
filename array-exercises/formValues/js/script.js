function App() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const list = [];

  function getFormEvent(event) {
    event.preventDefault(); //desabilita as funções padrão do navegador

    const name = form.querySelector(".name");
    const email = form.querySelector(".email");
    const senha = form.querySelector(".senha");
    const cpf = form.querySelector(".cpf");

    list.push({
      name: name.value,
      email: email.value,
      senha: senha.value,
      cpf: cpf.value,
    });

    result.innerHTML += `<p>
        ${name.value} - ${email.value} - ${senha.value} - ${cpf.value}
      </p>`;

    alert(`Bem vindo ${name.value}`);
    console.log(list);
  }
  form.addEventListener("submit", getFormEvent); //faz com que a pagina não atualize automaticamente com um evento
}

App();
