const input = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', handleClickCreate);
buttonDestroy.addEventListener('click', handleClickDestroy);

function handleClickCreate() {
  const inputValue = Number(input.value);

  if (inputValue >= 1 && inputValue <= 100) {
    destroyBoxes();
    createBoxes(inputValue);
    input.value = '';
  }
}

function handleClickDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxArray = [];
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    box.style.width = 30 + 10 * index + 'px';
    box.style.height = 30 + 10 * index + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxArray.push(box);
  }

  boxes.append(...boxArray);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
