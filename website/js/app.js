// ========================================
// NexaStore - Core Application Utilities
// ========================================

const CART_KEY = "nexastore_cart";


// ----------------------------------------
// Product Utilities
// ----------------------------------------

function getProductById(productId) {
    return products.find(product => product.product_id === productId);
}


function getDiscountedPrice(product) {
    if (!product.discount || product.discount <= 0) {
        return product.price;
    }

    return product.price * (1 - product.discount / 100);
}


function formatCurrency(amount) {
    return new Intl.NumberFormat("en-MY", {
        style: "currency",
        currency: "MYR"
    }).format(amount);
}


// ----------------------------------------
// Cart Storage
// ----------------------------------------

function getCart() {
    const storedCart = localStorage.getItem(CART_KEY);

    if (!storedCart) {
        return [];
    }

    try {
        return JSON.parse(storedCart);
    } catch (error) {
        console.error("Unable to read cart:", error);
        return [];
    }
}


function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}


// ----------------------------------------
// Cart Actions
// ----------------------------------------

function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);

    if (!product) {
        console.error(`Product ${productId} does not exist.`);
        return;
    }

    if (quantity <= 0) {
        return;
    }

    const cart = getCart();

    const existingItem = cart.find(
        item => item.product_id === productId
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            product_id: productId,
            quantity: quantity
        });
    }

    saveCart(cart);
}


function removeFromCart(productId) {
    const updatedCart = getCart().filter(
        item => item.product_id !== productId
    );

    saveCart(updatedCart);
}


function updateCartQuantity(productId, quantity) {
    const cart = getCart();

    const item = cart.find(
        cartItem => cartItem.product_id === productId
    );

    if (!item) {
        return;
    }

    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    item.quantity = quantity;

    saveCart(cart);
}


function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartCount();
}


// ----------------------------------------
// Cart Calculations
// ----------------------------------------

function getCartItemCount() {
    return getCart().reduce(
        (total, item) => total + item.quantity,
        0
    );
}


function getCartSubtotal() {
    return getCart().reduce((total, item) => {

        const product = getProductById(item.product_id);

        if (!product) {
            return total;
        }

        const price = getDiscountedPrice(product);

        return total + price * item.quantity;

    }, 0);
}


// ----------------------------------------
// Navigation Cart Counter
// ----------------------------------------

function updateCartCount() {
    const cartCountElement =
        document.querySelector("[data-cart-count]");

    if (!cartCountElement) {
        return;
    }

    cartCountElement.textContent = getCartItemCount();
}


// ----------------------------------------
// Initialisation
// ----------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});