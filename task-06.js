// Exercițiul 6
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', event => {
  const requiredLength = Number(validationInput.dataset.length);
  if (event.target.value.length === requiredLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});