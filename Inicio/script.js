document.addEventListener('DOMContentLoaded', function() {

    // MENU
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', function() {
            sidebar.classList.toggle('visible');
        });
    }

    // Cierra el menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (sidebar && menuBtn && sidebar.classList.contains('visible') &&
            !sidebar.contains(event.target) &&
            !menuBtn.contains(event.target)) {
            sidebar.classList.remove('visible');
        }
    });

    // BUSQUEDA
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const query = this.value.trim();
                if (query) {
                    console.log(`Buscando: ${query}`);
                }
            }
        });
    }

    // CARRITO
    const cartItems = [];
    function addToCart(item) {
        cartItems.push(item);
        updateCartDisplay();
    }
    function updateCartDisplay() {
        const cartItemsList = document.getElementById('cart-items');
        if (!cartItemsList) return;
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItemsList.appendChild(li);
        });
    }
    window.addToCart = addToCart;

    const cartBtn = document.getElementById('cart-btn');
    const cartContent = document.getElementById('cart-content');
    if (cartBtn && cartContent) {
        cartBtn.addEventListener('click', function() {
            cartContent.style.display = (cartContent.style.display === 'block') ? 'none' : 'block';
        });
    }

    document.addEventListener('click', function(event) {
        if (cartContent && cartBtn && cartContent.style.display === 'block' &&
            !cartContent.contains(event.target) &&
            !cartBtn.contains(event.target)) {
            cartContent.style.display = 'none';
        }
    });

    // CERRAR SESIÓN - YA CORREGIDO
    const btnLogout = document.getElementById('logout-btn');
    if (btnLogout) {
        btnLogout.addEventListener('click', function(){
            localStorage.removeItem('usuarioActual');
            sessionStorage.clear();
            alert('Sesión cerrada');
            window.location.href = 'login.html';
        });
    }

});