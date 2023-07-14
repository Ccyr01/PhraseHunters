/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrase1 = new Phrase("life is like a box of chocolates");
const phrase2 = new Phrase("life is not all about the pedos");
const phrase3 = new Phrase("big dog got to eat, little dog get scraps");
const phrase4 = new Phrase("to infinity and beyond");
const phrase5 = new Phrase("got the whole world in his hands");

const game = new Game();

// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// console.log(phrase1.phrase);
phrase1.addPhraseToDisplay();
