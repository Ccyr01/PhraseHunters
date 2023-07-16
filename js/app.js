/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlayElement = document.getElementById('overlay');
const li = document.getElementsByTagName('li');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementById('btn__reset');



btn_reset.addEventListener("click", () => {
    const game = new Game();
    game.startGame();
    // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});


