const inputRef = document.getElementById('name-input');
const spanRef = document.getElementById('name-output');

const onChangeName = event => {
  const name = event.target.value.trim();
  spanRef.textContent = name === '' ? 'незнакомец' : name;
};

inputRef.addEventListener('input', onChangeName);
