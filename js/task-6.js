function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// function createBoxes(amount) {
//   const divArray = [];
//   for (let i = 0; i < amount; i += 1) {
//     const div = document.createElement('div');
//     div.style.width = 30 + 10 * i + 'px';
//     div.style.height = 30 + 10 * i + 'px';
//     div.style.backgroundColor = getRandomHexColor();
//     divArray.push(div);
//   }
//   boxContainer.append(...divArray);
// }

