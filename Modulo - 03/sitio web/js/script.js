$navMenuItems = document.querySelectorAll(".navbar-link");

$navBarToggle = document.querySelector(".navbar-toggle");
$navBarMenu = document.querySelector(".navbar-menu");

$navBarToggle.addEventListener('click', () => {
    $navBarMenu.classList.toggle('navbar-menu-visible')
});

$navMenuItems.forEach(e => {
    e.addEventListener('click', () => {
        $navBarMenu.classList.toggle('navbar-menu-visible')
    })
});
