const categoriesRef = document.querySelectorAll('.item');
// console.log(categoriesRef);
const amountOfCategories = categoriesRef.length;
console.log(`В списке ${amountOfCategories} категории.`)

const elementsOfCategories = [...categoriesRef];
// console.log(elementsOfCategories);

for (let elem of elementsOfCategories) {
    const titleText = elem.firstElementChild.textContent;
    const quantityOfElements = elem.lastElementChild.children.length;
    console.log(`Категория: ${titleText}\nКоличество элементов: ${quantityOfElements}`)
}