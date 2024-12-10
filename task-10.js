// Exercițiul 10 (opțional)
const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

controls.querySelector('[data-create]').addEventListener('click', () => {
  const amount = Number(controls.querySelector('input').value);
  createBoxes(amount);
});

controls.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

