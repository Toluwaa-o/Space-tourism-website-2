const destinationDiv = document.querySelector('.destination');

fetch('./data.json')
.then(res => res.json())
.then(data => {
    for(let i = 0; i < data.destinations.length; i++){
        destinationDiv.insertAdjacentHTML('beforeend', `<div class=${data.destinations[i].name}>
        <div class="part1">
        <h3>${data.destinations[i].name}</h3>
        <p>${data.destinations[i].description}</p>
      </div>

      <div class='bottom-deets'>
      <div class="part2">
        <h4>Avg. Distance</h4>
        <p>${data.destinations[i].distance}</p>
      </div>

      <div class="part3">
        <h4>Est. travel time</h4>
        <p>${data.destinations[i].travel}</p>
      </div>
      </div>
      </div>
        `)
    }

let moonPage = document.querySelector('.Moon');
let marPage = document.querySelector('.Mars');
let europaPage = document.querySelector('.Europa');
let titanPage = document.querySelector('.Titan');
let imageEl = document.getElementById('planetImage');
let destinationNav = document.querySelectorAll('.destination-nav');

destinationNav[0].addEventListener('click', function(){
  moonPage.style.display = 'unset'
  europaPage.style.display = 'none'
  titanPage.style.display = 'none'
  marPage.style.display = 'none'
  imageEl.setAttribute('src', 'assets/destination/image-moon.png')
  destinationNav[0].style.borderBottom = '3px solid white'
  destinationNav[0].style.color = 'white'
  destinationNav[1].style.borderBottom = 'none'
  destinationNav[1].style.color = '#d0d6f9'
  destinationNav[2].style.borderBottom = 'none'
  destinationNav[2].style.color = '#d0d6f9'
  destinationNav[3].style.borderBottom = 'none'
  destinationNav[3].style.color = '#d0d6f9'
})

destinationNav[1].addEventListener('click', function(){
  moonPage.style.display = 'none'
  europaPage.style.display = 'none'
  titanPage.style.display = 'none'
  marPage.style.display = 'unset'
  imageEl.setAttribute('src', 'assets/destination/image-mars.png')
  destinationNav[1].style.borderBottom = '3px solid white'
  destinationNav[1].style.color = 'white'
  destinationNav[0].style.borderBottom = 'none'
  destinationNav[0].style.color = '#d0d6f9'
  destinationNav[2].style.borderBottom = 'none'
  destinationNav[2].style.color = '#d0d6f9'
  destinationNav[3].style.borderBottom = 'none'
  destinationNav[3].style.color = '#d0d6f9'
})

destinationNav[2].addEventListener('click', function(){
  moonPage.style.display = 'none'
  europaPage.style.display = 'unset'
  titanPage.style.display = 'none'
  marPage.style.display = 'none'
  imageEl.setAttribute('src', 'assets/destination/image-europa.png')
  destinationNav[2].style.borderBottom = '3px solid white'
  destinationNav[2].style.color = 'white'
  destinationNav[0].style.borderBottom = 'none'
  destinationNav[0].style.color = '#d0d6f9'
  destinationNav[1].style.borderBottom = 'none'
  destinationNav[1].style.color = '#d0d6f9'
  destinationNav[3].style.borderBottom = 'none'
  destinationNav[3].style.color = '#d0d6f9'
})

destinationNav[3].addEventListener('click', function(){
  moonPage.style.display = 'none'
  europaPage.style.display = 'none'
  titanPage.style.display = 'unset'
  marPage.style.display = 'none'
  imageEl.setAttribute('src', 'assets/destination/image-titan.png')
  destinationNav[3].style.borderBottom = '3px solid white'
  destinationNav[3].style.color = 'white'
  destinationNav[0].style.borderBottom = 'none'
  destinationNav[0].style.color = '#d0d6f9'
  destinationNav[2].style.borderBottom = 'none'
  destinationNav[2].style.color = '#d0d6f9'
  destinationNav[1].style.borderBottom = 'none'
  destinationNav[1].style.color = '#d0d6f9'
})
})

navButtons[1].addEventListener('click', function(){
  if (desktop.matches){
    destinationPage.style.display = 'grid'
    body.style.backgroundImage = 'url(assets/destination/background-destination-desktop.jpg)'
    navButtons[1].style.borderBottom = '3px solid white'
    navButtons[0].style.borderBottom = 'none'
    navButtons[2].style.borderBottom = 'none'
    navButtons[3].style.borderBottom = 'none'
}else if(tab.matches){
    destinationPage.style.display = 'block'
    body.style.backgroundImage = 'url(assets/destination/background-destination-tablet.jpg)'
    navButtons[1].style.borderBottom = '3px solid white'
    navButtons[0].style.borderBottom = 'none'
    navButtons[2].style.borderBottom = 'none'
    navButtons[3].style.borderBottom = 'none'
}else {
    destinationPage.style.display = 'block'
    body.style.backgroundImage = 'url(assets/destination/background-destination-mobile.jpg)'
    navBar.style.display = 'none';
}
homePage.style.display = 'none'
crewPage.style.display = 'none'
techPage.style.display = 'none'
})