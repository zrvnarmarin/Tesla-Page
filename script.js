const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const sideMenu = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('counter')

btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    sideMenu.classList.toggle('show-menu')
}

console.log(counters)