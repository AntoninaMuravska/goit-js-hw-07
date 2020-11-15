// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// const controlsRef = document.getElementById('controls');
// console.dir(controlsRef);
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.getElementById('boxes');

renderRef.addEventListener('click', createBoxes);
destroyRef.addEventListener('click', destroyBoxes);

// random color generator function
const randomColor = () => Math.random() * 256 >> 0;

function createBoxes(amount) {
    amount = document.querySelector("#controls input").value;
    let initialSizeOfBox = 30;
    for (let i = 1; i <= amount; i += 1) {
        let sizeOfBox = initialSizeOfBox + i * 10;
        const newBox = document.createElement('div');
        newBox.style.cssText = `width: ${sizeOfBox}px; height: ${sizeOfBox}px; background-color: rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        newBox.style.margin = '10px';
        boxesRef.append(newBox);
    }

}

// console.dir(boxesRef);

function destroyBoxes() {
    boxesRef.innerHTML = '';
}
