// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
// Завдання 5


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