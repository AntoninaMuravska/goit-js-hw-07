const categoriesRef = document.querySelectorAll('.item');
const numberOfCategories = categoriesRef.length;
console.log(`В списке ${numberOfCategories} категории.`);

categoriesRef.forEach(elem => {
     const category = elem.firstElementChild.textContent;
     const sumOfItems = elem.lastElementChild.children.length;
     console.log(`Категория: ${category}\nКоличество элементов: ${sumOfItems}`);
});