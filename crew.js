const crewDiv = document.querySelector('.crew');

fetch('./data.json')
.then(res => res.json())
.then(data => {
    for(let i = 0; i < data.crew.length; i++){
        crewDiv.insertAdjacentHTML('beforeend', `
        <div class="crewDet ${data.crew[i].name}">
        <p>${data.crew[i].role}</p>
        <h3>${data.crew[i].name}</h3>
        <p>${data.crew[i].bio}</p>
      </div>
        `)
    }

let crewNav = document.querySelectorAll('.crew-nav')
let crewPic = document.getElementById('crewPics')
let crewDetails = document.querySelectorAll('.crewDet')

crewNav[0].addEventListener('click', function(){
    crewNav[0].style.opacity = '1';
    crewNav[1].style.opacity = '0.17';
    crewNav[2].style.opacity = '0.17';
    crewNav[3].style.opacity = '0.17';
    crewPic.setAttribute('src', 'assets/crew/image-douglas-hurley.png')
    crewDetails[0].style.display = 'unset'
    crewDetails[1].style.display = 'none'
    crewDetails[2].style.display = 'none'
    crewDetails[3].style.display = 'none'
})

crewNav[1].addEventListener('click', function(){
    crewNav[1].style.opacity = '1';
    crewNav[0].style.opacity = '0.17';
    crewNav[2].style.opacity = '0.17';
    crewNav[3].style.opacity = '0.17';
    crewPic.setAttribute('src', 'assets/crew/image-mark-shuttleworth.png')
    crewDetails[1].style.display = 'unset'
    crewDetails[0].style.display = 'none'
    crewDetails[2].style.display = 'none'
    crewDetails[3].style.display = 'none'
})

crewNav[2].addEventListener('click', function(){
    crewNav[2].style.opacity = '1';
    crewNav[1].style.opacity = '0.17';
    crewNav[0].style.opacity = '0.17';
    crewNav[3].style.opacity = '0.17';
    crewPic.setAttribute('src', 'assets/crew/image-victor-glover.png')
    crewDetails[2].style.display = 'unset'
    crewDetails[1].style.display = 'none'
    crewDetails[0].style.display = 'none'
    crewDetails[3].style.display = 'none'
})

crewNav[3].addEventListener('click', function(){
    crewNav[3].style.opacity = '1';
    crewNav[1].style.opacity = '0.17';
    crewNav[2].style.opacity = '0.17';
    crewNav[0].style.opacity = '0.17';
    crewPic.setAttribute('src', 'assets/crew/image-anousheh-ansari.png')
    crewDetails[3].style.display = 'unset'
    crewDetails[1].style.display = 'none'
    crewDetails[2].style.display = 'none'
    crewDetails[0].style.display = 'none'
})
})

navButtons[2].addEventListener('click', function(){
  if (desktop.matches){
    crewPage.style.display = 'grid'
    body.style.backgroundImage = 'url(assets/crew/background-crew-desktop.jpg)'
    navButtons[2].style.borderBottom = '3px solid white'
    navButtons[0].style.borderBottom = 'none'
    navButtons[1].style.borderBottom = 'none'
    navButtons[3].style.borderBottom = 'none'
}else if(tab.matches){
    crewPage.style.display = 'grid'
    body.style.backgroundImage = 'url(assets/crew/background-crew-tablet.jpg)'
    navButtons[2].style.borderBottom = '3px solid white'
    navButtons[0].style.borderBottom = 'none'
    navButtons[1].style.borderBottom = 'none'
    navButtons[3].style.borderBottom = 'none'
}else {
    crewPage.style.display = 'block'
    body.style.backgroundImage = 'url(assets/crew/background-crew-mobile.jpg)'
    navBar.style.display = 'none';
}
homePage.style.display = 'none'
destinationPage.style.display = 'none'
techPage.style.display = 'none'
})