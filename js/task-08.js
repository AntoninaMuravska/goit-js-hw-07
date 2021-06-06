const refs = {
  input: document.querySelector('#controls input'),
  boxes: document.getElementById('boxes'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
};

const { input, boxes, renderBtn, destroyBtn } = refs;

// random color generator function
const randomColor = () => (Math.random() * 256) >> 0;

const createBoxes = amount => {
  amount = input.value;
  let boxSize = 30;
  let arrayOfBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    boxSize += 10;
    newBox.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; margin: 10px; background-color: rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    arrayOfBoxes.push(newBox);
  }

  boxes.append(...arrayOfBoxes);
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = '';
};

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
