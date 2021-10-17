function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
const bodeEl = document.querySelector('body');

const onBtnClick = () => {
  bodeEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
};

btnEl.addEventListener("click", onBtnClick);