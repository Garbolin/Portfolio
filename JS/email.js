
document.addEventListener("DOMContentLoaded", () => {
    const inputName = document.querySelector("#name");
    const inputEmail = document.querySelector("#email");
    const inputSubject = document.querySelector("#subject");
    const inputMessage = document.querySelector("#message");
    const btnSubmit = document.querySelector("#submit");
    const loader = document.querySelector("#loader");
    const form = document.querySelector("#form");

    email = {
        name : "",
        email : "",
        subject : "",
        message : "",
    }

    inputName.addEventListener("blur", validate);
    inputEmail.addEventListener("blur", validate);
    inputSubject.addEventListener("blur", validate);
    inputMessage.addEventListener("blur", validate);

    btnSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        isDisabled();

    })

    function validate(e) {
        if (e.target.value.trim() === ""){
            email[e.target.name] = "";
            //Comprobar si ya hay alerta
            removeAlert( e.target.parentElement );
            showAlert(`* hay que poner un contenido en el ${e.target.parentElement.querySelector("label").textContent}`, e.target.parentElement);
            return;
        }

        if (e.target.id === "email" && e.target.value.trim() !== "") {
            //Validar email
            if (!validateEmail(e.target.value.trim())){
                email[e.target.name] = "";
                showAlert(`* Creo que el email no está bien construido :P`, e.target.parentElement);
                return;
            }
        }
        //han pasado la prueba
        removeAlert(e.target.parentElement)
        email[e.target.name] = e.target.value.trim().toLowerCase();
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
        if(reference.lastElementChild?.classList?.contains("error-email")){
            const error = reference.lastElementChild;
            reference.removeChild(error);
        }
    }

    function refreshEmail() {
        
        Object.keys(email).forEach((key) => {
            email[key] = "";
        })

        form.reset();
    }

    function isDisabled() {
        if (Object.values(email).includes("")) {
            btnSubmit.desabled = true;
            return;
        } else {
            btnSubmit.desabled = false;
            sendEmail();
            refreshEmail();
        }
        
    }
    //Script file
    async function sendEmail() {
        try {
        loader.classList.remove("hidden-loader"); // mostramos loader antes de enviar

        const response = await emailjs.send(
            "service_uk15g8a",
            "template_19qjilk",
            email
        );
    } catch (error) {
        console.log('FAILED...', error);
    } finally {
        loader.classList.add("hidden-loader"); // siempre se oculta el loader al terminar
    }
    }


})