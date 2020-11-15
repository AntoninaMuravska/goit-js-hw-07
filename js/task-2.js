const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.getElementById('ingredients');
// console.log(ingredientsRef);

// const itemOfIngridients = document.createElement('li');
// itemOfIngridients.textContent = 'Картошка';
// ingredientsRef.appendChild(itemOfIngridients);

ingredients.forEach((item) => {
    const itemOfIngridients = document.createElement('li');
    itemOfIngridients.textContent = item;
    ingredientsRef.appendChild(itemOfIngridients);
})