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

// ingredients.forEach((item) => {
//     const itemOfIngridients = document.createElement('li');
//     itemOfIngridients.textContent = item;
//     ingredientsRef.appendChild(itemOfIngridients);
// })

// чтобы ДОМ много раз не перерендерился при добавлении в него элемента на каждой итерации цикла forEach, нужно вставить все li за одну оперцию
// создаем массив со всеми li
const createIngredientsList = (ingredient) => {
  const itemOfIngridients = document.createElement('li');
  itemOfIngridients.textContent = ingredient;
  
  return itemOfIngridients;
};

// и только потом добавляем их в ДОМ
const ingredientsList = ingredients.map(element => createIngredientsList(element));
// console.log(ingredientsList)
ingredientsRef.append(...ingredientsList)