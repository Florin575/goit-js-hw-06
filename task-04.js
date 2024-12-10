// Exercițiul 4
let counterValue = 0;
const counterDisplay = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
});