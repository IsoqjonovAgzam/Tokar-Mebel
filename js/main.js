var elButton = document.querySelector('.hamburger');
var elHeader = document.querySelector('.header');

elButton.addEventListener('click', (evt) => {
    elHeader.classList.toggle('header--active')
});