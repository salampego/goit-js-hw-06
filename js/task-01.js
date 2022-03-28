const itemAllEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemAllEl.length}`);

itemAllEl.forEach(e => {
  const ulRefs = e.children[1];
  console.log(`Category: ${e.children[0].textContent}`);
  console.log(`Elements: ${ulRefs.children.length}`);
});
