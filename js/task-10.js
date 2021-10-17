const numberInputEl = document.querySelector("input");
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount) {
  let arr = [];
  
  for (let i = 1; i <= amount; i += 1) {
    const newBoxes = document.createElement("div");
    newBoxes.style.width = `${20 + (i * 10)}px`;
    newBoxes.style.height = `${20 + (i * 10)}px`;
    newBoxes.style.backgroundColor = getRandomHexColor();

    arr.push(newBoxes);
  };

  boxesEl.append(...arr);
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