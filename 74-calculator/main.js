const app = () => {
  return {
    display: document.querySelector('.display'),

    init() {
      this.clickButton();
      this.pressEnter();
    },

    toDisplay(value) {
      this.display.value += value;
      this.display.focus();
    },

    pressEnter() {
      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          try {
            const result = eval(this.display.value);

            if (!result) return alert('Conta inválida');

            this.display.value = result;
          } catch (e) {
            return alert('Conta inválida');
          }
        }
      });
    },

    clickButton() {
      document.addEventListener('click', e => {
        const element = e.target;

        if (element.classList.contains('btn-num')) {
          this.toDisplay(element.innerText);
        }

        if (element.classList.contains('btn-clear')) {
          this.display.value = '';
        }

        if (element.classList.contains('btn-del')) {
          this.display.value = this.display.value.slice(0, -1);
        }

        if (element.classList.contains('btn-equals')) {
          try {
            const result = eval(this.display.value);

            if (result === NaN) return alert('Conta inválida');

            this.display.value = result;
          } catch (e) {
            return alert('Conta inválida');
          }
        }
      });
    },
  };
};

const calculator = app();
calculator.init();
