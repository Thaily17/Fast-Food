// --- MENU ---
document.getElementById('menu-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    document.getElementById('sidebar').classList.toggle('visible');
});

// --- BUSQUEDA ---
document.querySelector('.search-bar input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = this.value.trim();
        if (query) {
            console.log(`Buscando: ${query}`);
        }
    }
});

// --- CARRITO ---
const cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsList.appendChild(li);
    });
}

document.getElementById('cart-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    const cartContent = document.getElementById('cart-content');
    cartContent.classList.toggle('visible');
});

// --- CERRAR MENU Y CARRITO AL PICAR FUERA ---
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menu-btn');
    if (sidebar.classList.contains('visible') && 
        !sidebar.contains(event.target) && 
        !menuButton.contains(event.target)) {
        sidebar.classList.remove('visible');
    }

    const cartContent = document.getElementById('cart-content');
    const cartButton = document.getElementById('cart-btn');
    if (cartContent.classList.contains('visible') && 
        !cartContent.contains(event.target) && 
        !cartButton.contains(event.target)) {
        cartContent.classList.remove('visible');
    }
});

// --- CERRAR SESION - login.html está AFUERA de Inicio ---
function cerrarSesion() {
    localStorage.removeItem('usuarioActual');
    sessionStorage.clear();
    alert('Sesión cerrada');
    window.location.href = '../login.html';
}

document.getElementById('logout-btn').addEventListener('click', cerrarSesion);