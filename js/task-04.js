const value = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

console.log(value, btnDecrement, btnIncrement);
