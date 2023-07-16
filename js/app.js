/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase1 = new Phrase("life is like a box of chocolates");
// const phrase2 = new Phrase("life is not all about the pedos");
// const phrase3 = new Phrase("big dog got to eat, little dog get scraps");
// const phrase4 = new Phrase("to infinity and beyond");
// const phrase5 = new Phrase("got the whole world in his hands");
// const phrases = {phrase1,phrase2,phrase3,phrase4,phrase5};
const overlayElement = document.getElementById('overlay');
const li = document.getElementsByTagName('li');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementById('btn__reset');
console.log(btn_reset);

// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// console.log(phrase1.phrase);

btn_reset.addEventListener("click", () => {
    const game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});
// phrase1.addPhraseToDisplay();
// phrase1.checkLetter();
// console.log(getRandomPhrase());

