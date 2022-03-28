const refs = {
  input: document.querySelector('#name-input'),
  spanName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
  refs.spanName.textContent = event.currentTarget.value;
  if (refs.input.value !== '') {
    refs.spanName.textContent = event.currentTarget.value;
  } else {
    refs.spanName.textContent = 'Anonymous';
  }
});
