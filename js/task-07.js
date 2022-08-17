// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const newInput = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

newInput.addEventListener('input', onEdit);

function onEdit(event) {
    span.style.fontSize = event.currentTarget.value + `px`
}