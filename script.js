const mobileMenuButton = document.getElementById('mobileMenuButton');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
});
closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

const navbar = document.getElementById('mainNav');
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
        navbar.classList.add('nav-gradient-scrolled');
        if (scrollTop > lastScrollTop) {
            navbar.style.transform = 'scale(0.98)';
        } else {
            navbar.style.transform = 'scale(1)';
        }
    } else {
        navbar.classList.remove('nav-gradient-scrolled');
        navbar.style.transform = 'scale(1)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        navLinks.forEach(l => l.classList.remove('bg-blue-700'));
        this.classList.add('bg-blue-700');
    });
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});
