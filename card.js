document.addEventListener('DOMContentLoaded', function () {
    const carLink = document.querySelector('a[href="car.html"]');
    carLink.addEventListener('click', mostrarCarrito);
  });
  
  function mostrarCarrito(event) {
    event.preventDefault();
    const carrito = arregloProductos.map(producto => ({
      ...producto,
      total: producto.precio * producto.cantidad
    }));
  
    const carritoHTML = carrito.map(producto => `
      <div>
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <p>${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Total: $${producto.total}</p>
      </div>
    `).join('');
  
    document.querySelector('main').innerHTML = carritoHTML;
  }
  const arregloProductos = [
    {
      nombre: 'Producto 1',
      precio: 20,
      cantidad: 2,
      imagen: 'producto1.jpg'
    },
    {
      nombre: 'Producto 2',
      precio: 30,
      cantidad: 1,
      imagen: 'producto2.jpg'
    },
    // Agrega más productos según tus necesidades
  ];
    
