
document.addEventListener("DOMContentLoaded", () => {
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject");
    const inputMessage = document.querySelector("#message");
    const submit = document.querySelector("#submit");

    inputName.addEventListener("blur", validate);
    inputEmail.addEventListener("blur", validate);
    inputSubject.addEventListener("blur", validate);
    inputMessage.addEventListener("blur", validate);

    submit.addEventListener("click", (e) => {
        e.preventDefault()
        console.log("Enviando email...");
    })

    function validate(e) {
        if (e.target.value.trim() === ""){
            //Comprobar si ya hay alerta
            removeAlert( e.target.parentElement );
            showAlert(`* hay que poner un contenido en el ${e.target.parentElement.querySelector("label").textContent}`, e.target.parentElement);
            return;
        }

        if (e.target.id === "email" && e.target.value.trim() !== "") {
            //Validar email
            if (!validateEmail(e.target.value.trim())){
                showAlert(`* Creo que el email no está bien construido :P`, e.target.parentElement);
                return;
            }
        }

        //han pasado la prueba
        removeAlert(e.target.parentElement)
    }

    function showAlert( message, reference ) {
        removeAlert( reference )
        const error = document.createElement("P");
        error.textContent = message;
        error.classList.add("error-email");
        reference.appendChild(error);
    }

    function validateEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        const result = regex.test(email);
        return result;
    }

    //Comprobar si ya hay alerta, si hay se borra
    function removeAlert(reference) {
        console.log(reference)
        if(reference.lastElementChild?.classList.contains("error-email")){
            const error = reference.lastElementChild;
            reference.removeChild(error);
        }
    }

})