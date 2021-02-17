class FormValidated {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', event => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault(); //Priva a pagina de atualizar sozinha
    const isValid = this.isValid();
    const confirmPassword = this.confirmPassword();

    if (isValid && confirmPassword) {
      alert('Formulário enviado');
      this.form.submit();
    }
  }

  confirmPassword() {
    let valid = true;

    const password = this.form.querySelector('.password');
    const confirm = this.form.querySelector('.confirmPassword');

    if (password.value !== confirm.value) {
      valid = false;
      this.logError(password, 'Os campos de senha são diferentes');
      this.logError(confirm, 'Os campos de senha são diferentes');
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.logError(password, 'Senha precisa ter entre 6 e 12 caracteres');
    }

    return valid;
  }

  isValid() {
    let valid = true;

    for (let errMsg of this.form.querySelectorAll('.error-text')) {
      errMsg.remove();
    }

    for (let field of this.form.querySelectorAll('.validated')) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.logError(field, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        if (!this.cpfValidator(field)) valid = false;
      }

      if (field.classList.contains('username')) {
        if (!this.userValidator(field)) valid = false;
      }
    }
    return valid;
  }

  userValidator(field) {
    const username = field.value;
    let valid = true;

    if (username.length < 3 || username.length > 12) {
      this.logError(
        field,
        'O nome de usuario precisa ter entre 3 e 12 caracteres',
      );
      valid = false;
    } // essa expressão verifica se foi digitado letras maiusculas e minusculas ou numeros
    if (!username.match(/^[a-zA-Z0-9]+$/g)) {
      this.logError(
        field,
        'O nome de usuario precisa conter apenas letras e/ou numeros',
      );
      valid = false;
    }

    return valid;
  }

  cpfValidator(field) {
    const cpf = new CpfValidator(field.value);

    if (!cpf.valida()) {
      this.logError(field, 'Cpf inválido');
      return false;
    }

    return true;
  }

  logError(field, message) {
    const div = document.createElement('div');
    div.innerHTML = message;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const a = new FormValidated();
