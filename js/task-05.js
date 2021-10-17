const textInput = document.querySelector("input");
const output = document.querySelector("span");

const changeOutputText = event => {
    if (event.currentTarget.value ==="") {
      return  output.textContent = "Anonymous";
    }

    return output.textContent = event.currentTarget.value;
};

textInput.addEventListener("input", changeOutputText);

