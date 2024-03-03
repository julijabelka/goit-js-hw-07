const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);

for (const category of itemsEl) {
  const titlesEl = category.querySelector('h2').textContent;
  console.log(`Category: ${titlesEl}`);
  const listElement = category.querySelectorAll('ul li');
  console.log(`Elements: ${listElement.length}`);
}
