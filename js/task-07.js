const controlSlider = document.querySelector('#font-size-control');
const textHeading = document.querySelector('#text');

controlSlider.addEventListener('input', () => {
  textHeading.style.fontSize = controlSlider.value + 'px';
});
