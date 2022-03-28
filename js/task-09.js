const body = document.body;
const buttonBg = document.querySelector('.change-color');
const currentBg = document.querySelector('.color');
buttonBg.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  currentBg.textContent = getRandomHexColor().toUpperCase();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
