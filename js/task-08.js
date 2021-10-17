const formEl = document.querySelector(".login-form");

const onSubmitClick = event => {
    event.preventDefault();

    const formObject = {};

    formObject.email = formEl.elements.email.value;
    formObject.password = formEl.elements.password.value;
    
    if (formEl.elements.email.value === "" || formEl.elements.password.value === "") {
        return alert("Bсе поля должны быть заполнены");
    };

    console.log(formObject);
   

    event.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmitClick);
