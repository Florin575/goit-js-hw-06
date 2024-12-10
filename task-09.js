// Exercițiul 9
const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');
const body = document.body;

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}