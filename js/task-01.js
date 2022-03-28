const itemAllEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemAllEl.length}`);

const categories = document.querySelector('#categories');
// ANIMALS
const itemAnimalsEl = categories.firstElementChild;
const headingAnimalsEl = itemAnimalsEl.firstElementChild;
console.log(`Category: ${headingAnimalsEl.textContent}`);

const listAnimalsEl = itemAnimalsEl.lastElementChild;
const AnimalsEl = listAnimalsEl.children;
console.log(`Elemenst: ${AnimalsEl.length}`);

// PRODUCTS

const itemProductsEl = categories.children[1];
const headingProductsEl = itemProductsEl.firstElementChild;
console.log(`Category: ${headingProductsEl.textContent}`);

const listProductsEl = itemProductsEl.lastElementChild;
const ProductsEl = listProductsEl.children;
console.log(`Elemenst: ${ProductsEl.length}`);

// TECHONOLOGIES

const itemTechonologiesEl = categories.children[2];
const headingTechonologiesEl = itemTechonologiesEl.firstElementChild;
console.log(`Category: ${headingTechonologiesEl.textContent}`);

const listTechonologiesEl = itemTechonologiesEl.lastElementChild;
const TechonologiesEl = listTechonologiesEl.children;
console.log(`Elemenst: ${TechonologiesEl.length}`);
