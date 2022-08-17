// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

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