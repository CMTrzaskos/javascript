let cart = [];
let total = 0;

function addToCart(productName, price) {
    const itemIndex = cart.findIndex(item => item.name === productName);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>R$ ${item.price.toFixed(2)}</span>
            <span>Qtd: ${item.quantity}</span>
            <span>Total: R$ ${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}')">Remover</button>
        `;
        cartElement.appendChild(cartItem);
    });

    calculateTotal();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function calculateTotal() {
    total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('total').innerText = `Total: R$ ${total.toFixed(2)}`;
}
