const inputRef = document.getElementById('validation-input');

const onInputValidation = (event) => {
    const inputValueLength = event.target.value.length;
    const dataLength = parseInt(inputRef.dataset.length);

    if (inputValueLength === dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
};

inputRef.addEventListener('blur', onInputValidation);