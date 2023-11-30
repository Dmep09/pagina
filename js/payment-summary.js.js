document.addEventListener('DOMContentLoaded', function() {
    const orderSummaryElement = document.querySelector('.order-summary');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let total = 0;

    cartItems.forEach(item => {
        const productElement = document.createElement('p');
        productElement.textContent = `${item.nombre}: $${item.precio.toFixed(2)}`;
        orderSummaryElement.appendChild(productElement);

        total += item.precio;
    });

    const totalElement = document.createElement('p');
    totalElement.classList.add('order-total');
    totalElement.textContent = `Total Pagado: $${total.toFixed(2)}`;
    orderSummaryElement.appendChild(totalElement);
});


document.querySelector('.payment-confirmation button').addEventListener('click', function() {
    localStorage.removeItem('cartItems');
    window.location.href = 'index.html';
});
