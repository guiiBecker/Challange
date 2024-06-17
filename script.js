// quantidade de itens a serem exibidos na tela

document.addEventListener("DOMContentLoaded", function() {
    const productCountSelect = document.getElementById('product-count');
    const products = document.querySelectorAll('.product');

    console.log("Script loaded. Found products:", products.length);

    function updateProductDisplay() {
        const count = parseInt(productCountSelect.value);
        console.log("Updating display to show", count, "products");
        products.forEach((product, index) => {
            if (index < count) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    productCountSelect.addEventListener('change', updateProductDisplay);

    // Initialize display
    updateProductDisplay();
});
// -------------------------------------- //
// verificação de e-mail
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const subscribeButton = document.getElementById('subscribeButton');
    const errorMessage = document.getElementById('error-message');

    function validateEmail(email) {
        // Expressão regular para validar o formato do e-mail
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    subscribeButton.addEventListener('click', function() {
        const email = emailInput.value;
        if (validateEmail(email)) {
            errorMessage.style.display = 'none';
            alert("Seu e-mail foi cadastrado");
        } else {
            errorMessage.style.display = 'block';
        }
    });
});