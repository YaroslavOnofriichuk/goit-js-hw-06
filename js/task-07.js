const inputEl = document.querySelector("input");
const textEl = document.querySelector("span");

const changeTextSize = event => {
    textEl.setAttribute("style", `font-size: ${event.target.value}px`);
};

inputEl.addEventListener("change", changeTextSize);