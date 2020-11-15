const nameInputRef = document.getElementById('name-input');
const nameOutputRef = document.getElementById('name-output');

nameInputRef.addEventListener('input', changeName);

function changeName(event) {

    nameOutputRef.textContent = event.target.value === '' ? 'незнакомец' : event.target.value;
    
    // if (event.target.value === '') {
    //     nameOutputRef.textContent = 'незнакомец';
    // } else {
    //     nameOutputRef.textContent = event.target.value;
    // }
}