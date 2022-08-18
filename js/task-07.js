
const newInput = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

newInput.addEventListener('input', onEdit);

function onEdit(event) {
    span.style.fontSize = event.currentTarget.value + `px`
}