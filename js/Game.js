/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase("Hello World"),
            new Phrase("Life is like a box of chocolates"),
            new Phrase("Are we there yet"),
            new Phrase("Once upon a time"),
            new Phrase("Happily ever after")];
        this.activePhrase = null;
    }
    startGame(){
        const overlayElement = document.getElementById('overlay');
        overlayElement.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        console.log("active phrase game: " +this.activePhrase);
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
        console.log(`start game: avtive phrase from Game class random method${this.activePhrase}` )
        this.handleInteraction();
    }
    getRandomPhrase(){

        const phrase =  this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return phrase;
    }
    handleInteraction(){
        

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.addEventListener('click', () => {
            console.log(`Key "${key.textContent}" clicked!`);
            console.log(key);
            key.disabled = true;
            });
        });
        // if(this.phrase.)
    }

    
}