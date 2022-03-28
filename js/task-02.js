const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function (ingredient) {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList = 'item';
  console.log(itemRef);
  const listRef = document.querySelector('#ingredients');
  listRef.append(itemRef);
});
