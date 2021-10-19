const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const newElements = ingredients.map(ingredient => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add('item');
  return newElement;
});

ulEl.append(...newElements);