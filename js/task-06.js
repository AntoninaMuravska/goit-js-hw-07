const inputRef = document.getElementById('validation-input');

const onInputValidation = event => {
  const inputValueLength = event.target.value.length;
  const dataLength = parseInt(inputRef.dataset.length);

  if (inputValueLength === dataLength) {
    handleClass('valid', 'invalid');
  } else {
    handleClass('invalid', 'valid');
  }
};

function handleClass(firstClass, secondClass) {
  inputRef.classList.add(firstClass);
  inputRef.classList.remove(secondClass);
}

inputRef.addEventListener('blur', onInputValidation);
