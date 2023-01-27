const techDiv = document.querySelector('.technology');

fetch('./data.json')
.then(res => res.json())
.then(data => {
    for(let i = 0; i < data.technology.length; i++){
        techDiv.insertAdjacentHTML('beforeend', `
        <div class="techDet ${data.technology[i].name}">
          <p>The terminology...</p>
          <h3>${data.technology[i].name}</h3>
          <p>${data.technology[i].description}</p>
        </div>
        `)
    }

let landPic = document.getElementById('landscape')
let portPic = document.getElementById('portrait')
let techNav = document.querySelectorAll('.tech-nav')
let techDetails = document.querySelectorAll('.techDet')

techNav[0].addEventListener('click', function(){
    techNav[0].style.background = 'white';
    techNav[0].style.border = '1px solid white'
    techNav[0].style.color = 'black'
    techNav[1].style.background = 'transparent';
    techNav[1].style.border = '1px solid rgba(255, 255, 255, 0.25)'
    techNav[1].style.color = 'white'
    techNav[2].style.background = 'transparent';
    techNav[2].style.border = '1px solid rgba(255, 255, 255, 0.25)'
    techNav[2].style.color = 'white'

    
    portPic.setAttribute('srcset', 'assets/technology/image-launch-vehicle-portrait.jpg')
   
    landPic.setAttribute('src', 'assets/technology/image-launch-vehicle-landscape.jpg')

    techDetails[0].style.display = 'unset'
    techDetails[1].style.display = 'none'
    techDetails[2].style.display = 'none'
})

techNav[1].addEventListener('click', function(){
    techNav[1].style.background = 'white';
    techNav[1].style.border = '1px solid white'
    techNav[1].style.color = 'black'
    techNav[0].style.background = 'transparent';
    techNav[0].style.border = '1px solid rgba(255, 255, 255, 0.25)'
    techNav[0].style.color = 'white'
    techNav[2].style.background = 'transparent';
    techNav[2].style.border = '1px solid rgba(255, 255, 255, 0.25)'
    techNav[2].style.color = 'white'

    portPic.setAttribute('srcset', 'assets/technology/image-spaceport-portrait.jpg')

    landPic.setAttribute('src', 'assets/technology/image-spaceport-landscape.jpg')
    
    techDetails[1].style.display = 'unset'
    techDetails[0].style.display = 'none'
    techDetails[2].style.display = 'none'
})

techNav[2].addEventListener('click', function(){
    techNav[2].style.background = 'white';
    techNav[2].style.border = '1px solid white'
    techNav[2].style.color = 'black'
    techNav[1].style.background = 'transparent';
    techNav[1].style.border = '1px solid rgba(255, 255, 255, 0.25)'
    techNav[1].style.color = 'white'
    techNav[0].style.background = 'transparent';
    techNav[0].style.border = '1px solid rgba(255, 255, 255, 0.25)'
    techNav[0].style.color = 'white'

    portPic.setAttribute('srcset', 'assets/technology/image-space-capsule-portrait.jpg')

    landPic.setAttribute('src', 'assets/technology/image-space-capsule-landscape.jpg')
    
    techDetails[2].style.display = 'unset'
    techDetails[1].style.display = 'none'
    techDetails[0].style.display = 'none'
})
})

navButtons[3].addEventListener('click', function(){
  if (desktop.matches){
    techPage.style.display = 'grid'
    body.style.backgroundImage = 'url(assets/technology/background-technology-desktop.jpg)'
    navButtons[3].style.borderBottom = '3px solid white'
    navButtons[0].style.borderBottom = 'none'
    navButtons[1].style.borderBottom = 'none'
    navButtons[2].style.borderBottom = 'none'
}else if(tab.matches){
    techPage.style.display = 'block'
    body.style.backgroundImage = 'url(assets/technology/background-technology-tablet.jpg)'
    navButtons[3].style.borderBottom = '3px solid white'
    navButtons[0].style.borderBottom = 'none'
    navButtons[1].style.borderBottom = 'none'
    navButtons[2].style.borderBottom = 'none'
}else {
    techPage.style.display = 'block'
    body.style.backgroundImage = 'url(assets/technology/background-technology-mobile.jpg)'
    navBar.style.display = 'none';
}
homePage.style.display = 'none'
destinationPage.style.display = 'none'
crewPage.style.display = 'none'
})