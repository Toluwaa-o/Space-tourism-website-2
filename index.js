let hamburgerOpened = document.querySelector('.opened');
let hamburgerClosed = document.querySelector('.closed');
let navBar = document.querySelector('.nav-bar');
let body = document.getElementsByTagName('body')[0]

hamburgerOpened.addEventListener('click', function(){
    navBar.style.display = 'flex';
})

hamburgerClosed.addEventListener('click', function(){
    navBar.style.display = 'none';
})

let homePage = document.querySelector('.home')
let destinationPage = document.querySelector('.destination')
let crewPage = document.querySelector('.crew')
let techPage = document.querySelector('.technology');
let pages = document.querySelectorAll('.page')
let navButtons = document.querySelectorAll('.nav-button')
let tab = window.matchMedia('(min-width: 480px)')
let desktop = window.matchMedia('(min-width: 769px)')

navButtons[0].addEventListener('click', function(){
    if (desktop.matches){
        homePage.style.display = 'grid'
        body.style.backgroundImage = 'url(assets/home/background-home-desktop.jpg)'
        navButtons[0].style.borderBottom = '3px solid white'
        navButtons[1].style.borderBottom = 'none'
        navButtons[2].style.borderBottom = 'none'
        navButtons[3].style.borderBottom = 'none'
    }else if(tab.matches){
        homePage.style.display = 'block'
        body.style.backgroundImage = 'url(assets/home/background-home-tablet.jpg)'
        navButtons[0].style.borderBottom = '3px solid white'
        navButtons[1].style.borderBottom = 'none'
        navButtons[2].style.borderBottom = 'none'
        navButtons[3].style.borderBottom = 'none'
    }else {
        homePage.style.display = 'block'
        body.style.backgroundImage = 'url(assets/home/background-home-mobile.jpg)'
        navBar.style.display = 'none';
    }
    destinationPage.style.display = 'none'
    crewPage.style.display = 'none'
    techPage.style.display = 'none'
})