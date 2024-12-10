// Exercițiul 8
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    alert('All fields must be filled!');
    return;
  }

  console.log({ email, password });
  loginForm.reset();
});

