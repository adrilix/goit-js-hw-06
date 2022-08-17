
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
const myButton = document.querySelector('.change-color');
const mySpan = document.querySelector('.color');
const myBody = document.body;

myButton.addEventListener('click', onEdit);

function onEdit (event) {
      myBody.style.backgroundColor = getRandomHexColor();
      mySpan.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



