const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');
const ingredientList = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('item');
  itemRef.textContent = ingredient;
  return itemRef;
});
console.log(...ingredientList);
listRef.append(...ingredientList);
