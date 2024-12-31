function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');

    // Add click event listener to close menu when clicking anywhere
    document.addEventListener('click', function closeMenu(e) {
        if (!menu.contains(e.target) && !e.target.matches('.hamburger, .hamburger *')) {
            menu.classList.remove('active');
            document.removeEventListener('click', closeMenu);
        }
    });

    menu.addEventListener('click', function (e) {
        if (e.target.matches('a')) {
            menu.classList.remove('active');
        }
    });
}