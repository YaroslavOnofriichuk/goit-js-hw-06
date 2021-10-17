const textInput = document.querySelector("input");

let inputLength = 0;

const changeBorder = () => {
    if (inputLength !== Number(textInput.dataset.length)) {
        textInput.classList.add("invalid");
    }   else {
        textInput.classList.replace("invalid", "valid");
    }
};

const checkSymbols = event => {
    inputLength = event.currentTarget.value.length;
};

textInput.addEventListener("blur", changeBorder);
textInput.addEventListener("input", checkSymbols);
