let formInput = document.querySelector('#name-input');
let formOutput = document.querySelector('#name-output');

formInput.addEventListener('input', onFormInput);

function onFormInput(event) {
    console.log(event.target.value);
    if (event.target.value === '') {
        formOutput.textContent = 'Anonymous';
    } else {
        formOutput.textContent = event.target.value;
    }
}