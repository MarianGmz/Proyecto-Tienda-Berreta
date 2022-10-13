//Menu de navegacion responsivo
//Menu de navegacion responsivo
const hamburger = document.querySelector('.hamburger-icon')
const closeicon = document.querySelector('.close-icon')
const nav = document.querySelector('.nav-bar')


hamburger.addEventListener('click', openNav);
closeicon.addEventListener('click', closeNav);

function openNav (){
    nav.classList.add('open-nav')
    hamburger.style.display = "none"
}

function closeNav(){
    nav.classList.remove('open-nav');
    hamburger.style.display = "block"
}