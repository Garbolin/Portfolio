
document.addEventListener("DOMContentLoaded", () => {
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject");
    const inputMessage = document.querySelector("#message");

    inputName.addEventListener("blur", validate)
    inputEmail.addEventListener("blur", validate)
    inputSubject.addEventListener("blur", validate)
    inputMessage.addEventListener("blur", validate)


    function validate(e) {
        if (e.target.value.trim() === ""){
            //Comprobar si ya hay alerta
            alreadyAlert( e.target.parentElement )
            showAlert(`* hay que poner un contenido en el ${e.target.parentElement.querySelector("label").textContent}`, e.target.parentElement);
            return;
        }
        if (e.target.id === "email" && e.target.value.trim() !== "") {
            if (!validateEmail(e.target.value.trim())){
                showAlert(`* Creo que el email no está bien construido :P`, e.target.parentElement);
                return;
            }
        }
        


    }

    function showAlert( message, reference ) {
        console.log(message);
        const error = document.createElement("P");
        error.textContent = message;
        error.classList.add("error-email");
        reference.appendChild(error);
    }

    function validateEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        const result = regex.test(email);
        console.log(result);
        return result;
    }

    //Comprobar si ya hay alerta
    function alreadyAlert( reference ) {
        if(reference.lastElementChild?.classList.contains("error-email")) {
            console.log("tiene error")
        }
    }

})