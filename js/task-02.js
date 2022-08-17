// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.const ingredients =
 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
const newUl = document.querySelector("#ingredients");
// cтворюю цикл перебору інгрідієнтів
const allIngredients = ingredients.map(ingredient => {
  // // 1Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
  const newLi = document.createElement("li");
  // // 2Додасть назву інгредієнта як його текстовий вміст.
  newLi.textContent = ingredient;
  // // 3Додасть елементу клас item.
  newLi.classList.add("item");
  return newLi;
})
console.log (allIngredients);
// // 4Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
newUl.append(...allIngredients);