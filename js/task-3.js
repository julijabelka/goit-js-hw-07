const inputUserName = document.querySelector('#name-input');
const outputUserName = document.querySelector('#name-output');

inputUserName.addEventListener('input', handleInput);

function handleInput(event) {
  const normalInput = event.target.value.trim();

  if (normalInput === '') {
    outputUserName.textContent = 'Anonymous';
  } else {
    outputUserName.textContent = normalInput;
  }
}
