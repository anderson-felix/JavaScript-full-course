const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('#btn-task');
const tasks = document.querySelector('.tasks');

document.addEventListener('keypress', event => {
  if (!inputTask.value) return;

  if (event.key === 'Enter') {
    setTask(inputTask.value);
  }
});

document.addEventListener('click', event => {
  const element = event.target;

  if (element.classList.contains('btn-delete')) {
    element.parentElement.remove();
    saveTask();
  }
});

btnTask.addEventListener('click', () => {
  if (!inputTask.value) return;
  setTask(inputTask.value);
});

const setList = () => {
  const list = document.createElement('li');
  return list;
};

const setTask = task => {
  const list = setList();
  list.innerHTML = task;
  tasks.appendChild(list);
  clearInput();
  deleteBtn(list);
  saveTask();
};

const clearInput = () => {
  inputTask.value = '';
  inputTask.focus();
};

const deleteBtn = list => {
  list.innerText += ' ';
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'btn-delete');
  deleteButton.innerText = 'Delete';
  list.appendChild(deleteButton);
};

const saveTask = () => {
  const list = tasks.querySelectorAll('li');
  const taskList = [];

  for (let task of list) {
    let text = task.innerText;
    text = text.replace('Delete', '').trim();
    taskList.push(text);
  }
  const taskListJSON = JSON.stringify(taskList);
  localStorage.setItem('tasks', taskListJSON);
};

const getTask = () => {
  const tasks = localStorage.getItem('tasks');
  const taskList = JSON.parse(tasks);

  for (let task of taskList) {
    setTask(task);
  }
};
getTask();
