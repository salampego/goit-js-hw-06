const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  const formData = new FormData(event.currentTarget);

  if (password === '' || email === '') {
    alert('заповніть всі поля!!!');
  } else {
    formData.forEach((name, value) => {
      console.log(`${value}: ${name}`);
      event.currentTarget.reset();
    });
  }
}
