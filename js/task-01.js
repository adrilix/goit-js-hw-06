// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const liItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liItem.length}`);
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
liItem.forEach((item) => {
    console.log(`paragraph:`, item.querySelector('h2').textContent);
    console.log(`elements:`, item.querySelectorAll('li').length);
});