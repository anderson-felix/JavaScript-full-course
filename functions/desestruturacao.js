const object = ({ name, age, city }) => {
  return console.log(name, age, city);
};

const objPerson = {
  name: 'Anderson',
  age: '23',
  city: 'Franca',
};

object(objPerson);

console.log('\n');
//____________________________________________________________________________

const array = ([v0, v1, v2, v3]) => {
  return console.log(v0, v1, v2, v3);
};

const arrayValues = ['Não encontrado', 100, 777, 'Óbito do cliente'];

array(arrayValues);
