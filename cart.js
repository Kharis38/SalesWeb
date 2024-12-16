function addToCart(productId) {
    // Store product IDs in local storage (or use a more robust solution)
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirect to cart page
    window.location.href = "cart.html";
}