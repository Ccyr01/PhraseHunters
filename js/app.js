/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlayElement = document.getElementById('overlay');
const li = document.getElementsByTagName('li');
const ul = document.querySelector('ul');
const keys = document.querySelectorAll('.key');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementById('btn__reset');
const images = document.querySelectorAll('img');
const targetSrc = 'images/lostHeart.png';
const liveHeart = 'images/liveHeart.png';


//Start the game
//We need to clear old styling from previous game
// just in case it's not the user's first attempt
btn_reset.addEventListener("click", () => {
    ul.innerHTML = '';
    keys.forEach(key => {                
            key.classList.remove('wrong');
            key.classList.remove('chosen');
            key.disabled = false;

    });
    images.forEach((image, index) => {
        if (image.getAttribute('src') === targetSrc) {
            image.setAttribute('src', liveHeart);
            
        }
    });
    const game = new Game();
    game.startGame();

});



