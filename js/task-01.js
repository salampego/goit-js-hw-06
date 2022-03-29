const itemAllEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemAllEl.length}`);

itemAllEl.forEach(e => {
  console.log(`Category: ${e.children[0].textContent}`);
  console.log(`Elements: ${e.children[1].children.length}`);
});
