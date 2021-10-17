const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const newElements = [];

ingredients.forEach(element => {
  const newElement = document.createElement("li");
  newElement.textContent = element;
  newElement.classList.add('item');
  newElements.push(newElement);

});

ulEl.append(...newElements);