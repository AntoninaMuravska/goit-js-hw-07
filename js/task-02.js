const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.getElementById('ingredients');

const createIngredientsList = ingredient => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.textContent = ingredient;
  return itemOfIngredients;
};

const ingredientsList = ingredients.map(elem => createIngredientsList(elem));

ingredientsListRef.append(...ingredientsList);
