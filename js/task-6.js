const validationInputRef = document.getElementById('validation-input');
// console.dir(validationInputRef);

const dataLengthStr = validationInputRef.attributes['data-length'].value;
const dataLength = parseInt(dataLengthStr);
// console.log(dataLength);

validationInputRef.addEventListener('blur', addRemoveClassOnInput)

function addRemoveClassOnInput() {
const inputValueLength = validationInputRef.value.length;
    //   console.log(inputValueLength);
       
    if (inputValueLength === dataLength) {
        validationInputRef.classList.add('valid')
        validationInputRef.classList.remove('invalid')
    } else {
        validationInputRef.classList.remove('valid')
        validationInputRef.classList.add('invalid')
    }
}