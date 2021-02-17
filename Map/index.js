const persons = [
  { id: 3, name: 'Anderson' },
  { id: 2, name: 'Nubia' },
  { id: 1, name: 'Frodo' },
];

// const newPerson = {};
// for (const person of persons) {
// let { id } = person;
// newPerson[id] = { ...person };
// }

const newPerson = new Map();
for (const person of persons) {
  let { id } = person;
  newPerson.set(id, { ...person });
}

console.log(newPerson);

for (let [identifier, { id, name }] of newPerson) {
  console.log(identifier, id, name);
}
