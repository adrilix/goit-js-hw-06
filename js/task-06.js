// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const newInput = document.querySelector('#validation-input');
const dataLength = newInput.getAttribute('data-length');

newInput.addEventListener('blur', onInputAll);

function onInputAll(event) {
    console.log(event.target.value.length);

    if (Number(dataLength) === (event.target.value.length)) {
        newInput.classList.remove('invalid')
        newInput.classList.add('valid')
    } else {
        newInput.classList.remove('valid')
        newInput.classList.add('invalid')
    }
}

