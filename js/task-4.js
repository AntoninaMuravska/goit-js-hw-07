const decBtnRef = document.querySelector('[data-action="decrement"]');
const counterRef = document.getElementById('value');
const incBtnRef = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    counterRef.textContent = counterValue;

};

const increment = () => {
    counterValue += 1;
    counterRef.textContent = counterValue;
};

decBtnRef.addEventListener('click', () =>  decrement() ); // не ожидает аргумент, передавать не нужно
incBtnRef.addEventListener('click', () =>  increment() ); // не ожидает аргумент, передавать не нужно

