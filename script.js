document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("miFormulario");
    var erroresDiv = document.getElementById("errores");
    var exitoDiv = document.getElementById("exito");

    var enviadoConExito = false;

    formulario.addEventListener("submit", function(event) {
       
        event.preventDefault();

       
        erroresDiv.innerHTML = "";

    
        var nombre = document.getElementById("nombre").value;
        var price = document.getElementById("price").value;
        var inventary = document.getElementById("inventary").value;

        
        if (!nombre) {
            mostrarError("El campo Nombre es obligatorio");
        }

        if (!price || isNaN(price) || parseFloat(price) <= 0) {
            mostrarError("El campo Precio debe ser un número válido y mayor que cero");
        }

        if (!inventary || isNaN(inventary) || parseInt(inventary) < 0) {
            mostrarError("El campo Inventario debe ser un número válido y mayor o igual a cero");
        }

        
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

       
        setTimeout(function() {
            exitoDiv.style.display = "none";
            formulario.reset();  
        }, 3000);
    }

    
    formulario.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            
            if (!enviadoConExito) {
                formulario.reset();
            }
        }
    });
});