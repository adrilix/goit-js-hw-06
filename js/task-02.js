
 const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newUl = document.querySelector("#ingredients");

const allIngredients = ingredients.map(ingredient => {

  const newLi = document.createElement("li");

  newLi.textContent = ingredient;

  newLi.classList.add("item");
  return newLi;
})
console.log (allIngredients);

newUl.append(...allIngredients);