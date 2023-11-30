document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("miFormulario");
    var erroresDiv = document.getElementById("errores");
    var exitoDiv = document.getElementById("exito");

    var enviadoConExito = false;

    formulario.addEventListener("submit", function(event) {
        // Evitar que el formulario se envíe por defecto
        event.preventDefault();

        // Limpiar mensajes de error y éxito anteriores
        erroresDiv.innerHTML = "";

        // Realizar validaciones
        var nombre = document.getElementById("nombre").value;
        var price = document.getElementById("price").value;
        var inventary = document.getElementById("inventary").value;

        // Validar campos obligatorios
        if (!nombre) {
            mostrarError("El campo Nombre es obligatorio");
        }

        if (!price || isNaN(price) || parseFloat(price) <= 0) {
            mostrarError("El campo Precio debe ser un número válido y mayor que cero");
        }

        if (!inventary || isNaN(inventary) || parseInt(inventary) < 0) {
            mostrarError("El campo Inventario debe ser un número válido y mayor o igual a cero");
        }

        // Si no hay errores, mostrar mensaje de éxito y marcar como enviado con éxito
        if (erroresDiv.innerHTML === "") {
            mostrarExito();
        }
    });

    function mostrarError(mensaje) {
        var errorDiv = document.createElement("div");
        errorDiv.textContent = mensaje;
        errorDiv.className = "error";
        erroresDiv.appendChild(errorDiv);
    }

    function mostrarExito() {
        alert("¡Producto creado con éxito!");
        exitoDiv.style.display = "block";

        // Agregar un tiempo de espera antes de realizar acciones adicionales
        setTimeout(function() {
            exitoDiv.style.display = "none";
            formulario.reset();  // Opcional: reiniciar el formulario después del éxito
        }, 3000); // Ocultar después de 3 segundos (ajusta según tu preferencia)
    }

    // Evitar que el formulario se envíe nuevamente al presionar Enter
    formulario.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            // Si el formulario fue enviado con éxito, no resetearlo al presionar Enter
            if (!enviadoConExito) {
                formulario.reset();
            }
        }
    });
});