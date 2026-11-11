document.getElementById('menu-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
});

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-btn');

    // Verifica si el clic fue fuera de la sidebar y el botón del menú
    if (sidebar.classList.contains('visible') && 
        !sidebar.contains(event.target) && 
        !menuButton.contains(event.target)) {
        sidebar.classList.remove('visible');
    }
});

// Función de búsqueda
document.querySelector('.search-bar input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita el envío del formulario si está dentro de uno
        const query = this.value.trim(); // Obtiene el valor del campo de búsqueda

        if (query) {
            // Aquí puedes hacer algo con la búsqueda
            console.log(`Buscando: ${query}`);
            // Por ejemplo, redirigir a otra página de búsqueda:
            // window.location.href = `buscar.html?q=${encodeURIComponent(query)}`;
        }
    }
});

// Array para almacenar los elementos del carrito
const cartItems = [];

// Función para agregar un artículo al carrito
function addToCart(item) {
    cartItems.push(item);
    updateCartDisplay();
}

// Actualiza la visualización del carrito
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpia la lista actual

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item; // Agrega el nombre del artículo
        cartItemsList.appendChild(li);
    });
}

// Muestra u oculta el contenido del carrito
document.getElementById('cart-btn').addEventListener('click', function() {
    const cartContent = document.getElementById('cart-content');
    cartContent.style.display = (cartContent.style.display === 'block') ? 'none' : 'block'; // Alterna la visibilidad
});

// Cierra el carrito al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const cartContent = document.getElementById('cart-content');
    const cartButton = document.getElementById('cart-btn');

    // Verifica si el clic fue fuera del carrito y el botón del carrito
    if (cartContent.style.display === 'block' && 
        !cartContent.contains(event.target) && 
        !cartButton.contains(event.target)) {
        cartContent.style.display = 'none'; // Oculta el carrito
    }
});

document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('visible');
});

document.getElementById('cart-btn').addEventListener('click', function() {
    document.getElementById('cart-content').classList.toggle('visible');
});

document.getElementById('menu-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
});

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-btn');

    if (sidebar.classList.contains('visible') && 
        !sidebar.contains(event.target) && 
        !menuButton.contains(event.target)) {
        sidebar.classList.remove('visible');
    }
});

