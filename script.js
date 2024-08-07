

document.addEventListener('DOMContentLoaded', function () {
    // Handle hamburger menu toggle
    const menuCheckbox = document.querySelector('.navbar-container input[type="checkbox"]');
    const menuItems = document.querySelector('.navbar .menu-items');
    const lines = document.querySelectorAll('.hamburger-lines .line');

    menuCheckbox.addEventListener('change', function () {
        if (menuCheckbox.checked) {
            menuItems.style.display = 'flex';
            lines[0].style.transform = 'rotate(45deg) translateY(10px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            menuItems.style.display = 'none';
            lines[0].style.transform = 'rotate(0)';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'rotate(0)';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle order form submission (example, can be customized)
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Example processing
            const formData = new FormData(orderForm);
            const orderDetails = {};
            formData.forEach((value, key) => {
                orderDetails[key] = value;
            });

            console.log('Order Details:', orderDetails);

            // Display a confirmation message (could be improved)
            alert('Your order has been placed successfully!');

            // Optionally, clear the form
            orderForm.reset();
        });
    }
});
