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

const game = new Game();
//Start the game
//We need to clear old styling from previous game
// just in case it's not the user's first attempt
btn_reset.addEventListener("click", () => {
    ul.innerHTML = '';
    game.missed = 0;
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
    //Got to remove the previous eventListener for restarted games
    keys.forEach(key => {
        key.removeEventListener('click', (e) => {
        });
    });
    console.log(game.missed);
    game.startGame();


});
keys.forEach(key => {
    key.addEventListener('click', handleClicks); // Use the function reference
});
function handleClicks(e){
    const letterKey = e.target.textContent;
    game.handleInteraction(letterKey,e.target);
    e.target.disabled = true;
}




