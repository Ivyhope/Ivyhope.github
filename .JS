document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    burger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
