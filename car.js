document.addEventListener('DOMContentLoaded', function() {
  var carrito = document.createElement('div');
  carrito.id = 'carrito';
  document.body.appendChild(carrito);

  var totalCarritoElement = document.createElement('div');
  totalCarritoElement.innerHTML = 'Total del Carrito: $<span id="totalCarrito">0.00</span>';
  document.body.appendChild(totalCarritoElement);

  var totalCarrito = 0;

  function agregarAlCarrito(nombre, precio, imagen) {
      var producto = document.createElement('div');
      producto.innerHTML = `
          <img src="${imagen}" alt="${nombre}" width="200">
          <span>${nombre}</span>
          <span>Precio: $${precio}</span>
          <label>Cantidad: <input type="number" value="1" min="1"></label>
          <span>Total: $<span class="total">${precio.toFixed(2)}</span></span>
          <hr>
      `;

      var cantidadInput = producto.querySelector('input');
      cantidadInput.addEventListener('input', function() {
          var cantidad = parseInt(cantidadInput.value);
          var nuevoTotal = cantidad * precio;
          producto.querySelector('.total').innerText = nuevoTotal.toFixed(2);
          calcularTotalCarrito();
      });

      carrito.appendChild(producto);
      calcularTotalCarrito();

    }

    function calcularTotalCarrito() {
      var productos = carrito.querySelectorAll('total');
      totalCarrito = 0;          
  }

  
  agregarAlCarrito('Juego  1', 20, 'IMG/Assassins.jpg');
  agregarAlCarrito('Juego  2', 30, 'IMG/Horizont.jpg');
  agregarAlCarrito('Juego  3', 40, 'IMG/Spiderman.jpg');
});
