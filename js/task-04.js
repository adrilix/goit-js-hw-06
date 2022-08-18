
const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

buttonDec.addEventListener("click", onDecrementClick);
buttonInc.addEventListener("click", onIncrementClick);

let counterValue = 0;

function onDecrementClick() {
    counterValue -= 1;
    span.textContent = counterValue;
}

function onIncrementClick() {
    counterValue += 1;
    span.textContent = counterValue;
}

console.log(counterValue);