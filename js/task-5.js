const nameInputRef = document.getElementById('name-input');
const nameOutputRef = document.getElementById('name-output');

nameInputRef.addEventListener('input', changeName);

function changeName(event) {
    
    if (event.target.value === '') {
        nameOutputRef.textContent = 'незнакомец';
    } else {
        nameOutputRef.textContent = event.target.value;
    }
}