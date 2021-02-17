const userName = document.querySelector('.name');
const cpf = document.querySelector('.cpf');
const btn = document.querySelector('#btn');

btn.addEventListener('click', e => {
  const name = userName.value;
  const nameValidate = Number(userName.value);
  const cpfValidate = Number(cpf.value);

  if (nameValidate || name.length < 3) return alert('Username invalid!');
  if (!cpfValidate || cpf.value.length != 11) return alert('Cpf invalid!');

  cpf.value = '';
  userName.value = '';

  return alert(`Bem vindo ${name} !`);
});
