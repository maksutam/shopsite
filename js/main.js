const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

//Клик по кнопке
navBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
    body.classList.toggle('no-scroll');
})

//КЛик по внешнему окну
window.addEventListener('click', function () {
    if (body.classList.contains('no-scroll')) {
        body.classList.toggle('no-scroll');
        navBtn.classList.toggle('nav-button-close');
        mobileNav.classList.toggle('mobile-nav-active');
    }
})

mobileNav.addEventListener('click', function (event) {
    event.stopPropagation()
})