function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (email === "" || !email.includes("@")) { 
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    return true; // Permitir el envío del formulario
}

function mostrarMensaje() {
    if (validarFormulario()) {
        alert("Datos ingresados"); // Mensaje de éxito al enviar
        return true; // Permitir el envío del formulario
    }

    return false; // No enviar si falla la validación
}
