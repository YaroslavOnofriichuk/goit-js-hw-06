
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const onDecremenClick = (event) => {
    counterValue -= 1;
    return valueEl.textContent = counterValue;
};

const onIncremenClick = (event) => {
    counterValue += 1;
    return valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecremenClick);

incrementBtn.addEventListener('click', onIncremenClick);