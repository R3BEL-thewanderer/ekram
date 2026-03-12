// cart.js — Shopping cart logic using localStorage

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(event, id, name, price, image, category) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const existing = cart.findIndex(item => item.id === id);
    if (existing !== -1) {
        alert(name + ' is already in your cart!');
        return;
    }
    cart.push({ id, name, price, image, category, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(name + ' added to cart!');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

function updateQuantity(id, qty) {
    if (qty < 1) return;
    const idx = cart.findIndex(item => item.id === id);
    if (idx !== -1) {
        cart[idx].quantity = parseInt(qty);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartBadge();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}
function formatPrice(n) {
    return '₹' + n.toLocaleString('en-IN');
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = getCartCount();
    badges.forEach(b => {
        b.textContent = count;
        b.classList.toggle('show', count > 0);
    });
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    if (!container) { updateCartBadge(); return; }

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <svg width="48" height="48" fill="none" stroke="#999" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="collections.html" class="btn-continue">Continue Shopping</a>
            </div>`;
        if (subtotalEl) subtotalEl.textContent = formatPrice(0);
        if (totalEl) totalEl.textContent = formatPrice(0);
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-cat">${item.category}</div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">✕ Remove</button>
            </div>
            <div class="qty-control">
                <button onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
            </div>
            <div style="text-align:right;min-width:80px;">
                <div style="font-weight:700">${formatPrice(item.price * item.quantity)}</div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
    const sub = getCartTotal();
    if (subtotalEl) subtotalEl.textContent = formatPrice(sub);
    if (totalEl) totalEl.textContent = formatPrice(sub);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartBadge();
});
