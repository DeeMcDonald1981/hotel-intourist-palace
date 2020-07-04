const mobileNav = () => {
    let navBtn = document.querySelector('.navbtn');
    let showNavigation = document.querySelector('.links');

    navBtn.addEventListener('click', function () {
        showNavigation.classList.toggle('show');
    })
}
mobileNav();

const stickyNav = () => {
    let navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        let totalNav = navbar.scrollHeight + navbar.offsetTop;
        if (window.scrollY > totalNav + 50) {
            navbar.classList.add('stickyNav');
        } else {
            navbar.classList.remove('stickyNav');
        }
    });
}
stickyNav();

