const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.getElementById('value');
const incrementBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const increment = () => {
 counterValue += 1;
 valueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
