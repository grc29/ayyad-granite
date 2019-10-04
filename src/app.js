import './scss/style.scss';

// Sticky Nav
let nav = document.getElementById('nav');
let sticky = nav.offsetTop;

window.onscroll = myFunction();

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }
}
//

// Mobile Menu Pop-up
let open = document.getElementById('menu-icon');
let menu = document.getElementById('mobile-menu');
console.log(open);
open.addEventListener("click", menuIconFunction);

function menuIconFunction() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}
