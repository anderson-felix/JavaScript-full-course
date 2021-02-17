const lists = document.querySelector('.list');
const inputList = document.querySelector('.input-area');
const btnAdd = document.querySelector('#btn');
const btnRand = document.querySelector('#btnRand');

document.addEventListener('keypress', event => {
  if (!inputList.value) return;

  if (event.key === 'Enter') {
    setListItem(inputList.value);
  }
});

btnAdd.addEventListener('click', () => {
  if (!inputList.value) return;
  setListItem(inputList.value);
});

const setList = () => {
  const list = document.createElement('li');
  return list;
};

const setListItem = item => {
  const list = setList();

  list.innerHTML(item);
};

const random = (min, max) => {
  const rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};
const result = list => {
  const outputList = [];

  while (outputList.length < list.length) {
    let rand = random(0, list.length);

    //o indexOf vai verificar se existe um valor no array com o parametro passado,
    //se existir ele retorna a posição do ele no array, se não existir ele retorna -1
    if (outputList.indexOf(rand) == -1) {
      const value = list[rand];

      if (outputList.indexOf(value) == -1) {
        outputList.push(value);
      }
    }
  }

  const viewList = () => {
    let cont = 1;
    for (let i of outputList) {
      console.log(`${cont++} - ${i}`);
    }
  };

  return viewList();
  // return console.log(outputList.join(' - '));
};

const inputList = [
  'Anderson',
  'Nubia',
  'Cibelle',
  'Pedro',
  'Lais',
  'Felipe',
  'Clelio',
  'Estopinha',
  'Roger',
  'Alice',
];

result(inputList);
