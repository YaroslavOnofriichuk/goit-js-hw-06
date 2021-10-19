const numberInputEl = document.querySelector("input");
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  let boxesArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const newBoxes = document.createElement("div");
    newBoxes.style.width = boxesEl.lastElementChild === null ? `${20 + (i * 10)}px` : `${Number(boxesEl.lastElementChild.style.width.slice(0, boxesEl.lastElementChild.style.width.length - 2)) + (i * 10)}px`;
    newBoxes.style.height = boxesEl.lastElementChild === null ? `${20 + (i * 10)}px` : `${Number(boxesEl.lastElementChild.style.width.slice(0, boxesEl.lastElementChild.style.width.length - 2)) + (i * 10)}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();

    boxesArray.push(newBoxes);
  }

  boxesEl.append(...boxesArray);
};

function destroyBoxes() {
  numberInputEl.value = "";
  while (boxesEl.firstChild) {
    boxesEl.removeChild(boxesEl.firstChild);
  };
};

const onInput = () => {
  return numberInputEl.value;
};

const onCreateBtnClick = () => {
  createBoxes(onInput());
};

const onDestroyBtnElClick = () => {
  destroyBoxes();
};

numberInputEl.addEventListener("input", onInput);
createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyBtnElClick);