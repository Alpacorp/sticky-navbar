const nav = document.querySelector('nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log(window.scrollY, nav.offsetHeight + 150);
    if (window.scrollY > nav.offsetHeight + 80) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
}