document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Realiza la validación
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("¡Formulario enviado correctamente!");
        // Aquí puedes enviar los datos del formulario a través de una solicitud AJAX o realizar otras acciones necesarias
    }
});
