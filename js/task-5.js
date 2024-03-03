const body = document.querySelector('body');
const color = document.querySelector('.color');
const changeColor = document.querySelector('button');

changeColor.addEventListener('click', handleClick);
function handleClick() {
  const getColor = getRandomHexColor();
  body.style.backgroundColor = getColor;
  color.textContent = getColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
