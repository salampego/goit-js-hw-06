const controlSlider = document.querySelector('#font-size-control');
const textHeading = document.querySelector('#text');

textHeading.style.fontSize = controlSlider.value + 'px';

controlSlider.addEventListener('input', () => {
  textHeading.style.fontSize = controlSlider.value + 'px';
});
