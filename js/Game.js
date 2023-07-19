/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    //Game constructor consists of 
    //the numer of misses which will be incremented with wrong guesses
    //an array of phrases
    //and an active phrase which will be selected from the array randomly
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
    //start game method calls the other method:
    // gets random phrase, displays it,
    // handles user interactions, and checks for a winner
    startGame(){
        this.missed = 0;
        const overlayElement = document.getElementById('overlay');
        overlayElement.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
        // this.handleInteraction();
        // this.checkForWin();
    }
    //returns random phrase from our array of phrase objects
    getRandomPhrase(){

        const phrase =  this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return phrase;
    }
    //method is called after wrong guess
    //takes away one of the users hearts
    removeLife(){
        let index = 0;
        const tries = document.querySelectorAll('.tries');
        const images = document.querySelectorAll('img');
        const targetSrc = 'images/liveHeart.png';
        let lastIndex = -1;
        let count = 0;
        
        images.forEach((image, index) => {
            if (image.getAttribute('src') === targetSrc) {
                lastIndex = index;
                count++;
                // console.log("count: "+count);
            }
        });
        this.missed++;
        //check if last life is taken
        if(this.missed === 5){
            this.gameOver('lose');
        }
        
        //checks if there is an image to change based on lastIndex
        //It will either have an index num on the img that needs to be changed
        //or it is going to be -1
        if (lastIndex > -1) {
            const lastImage = images[lastIndex];
            lastImage.setAttribute('src', 'images/lostHeart.png');
        }
    }
    //check for winner then add correct styling
    checkForWin(){
        const li = document.querySelectorAll('.hide.letter');
        let count =0;
        li.forEach(listItem => {
            count++;
            // console.log("item " +listItem.textContent+" count "+count);

        })
        if(count === 0){
            this.gameOver('win');
        }
    }
    //ends game & takes you back to start menu with appropriate styling
    // depending on if you won or lost
    gameOver(outcome){
        
        if(outcome === 'lose'){
            const gameOverH1 = document.getElementById("game-over-message");
        

            overlayElement.style.display = 'block';
            overlayElement.classList.add('lose');
            overlayElement.classList.remove('win');
            gameOverH1.innerText = "Sorry you lost. Try again.";
            alert("game over");
        }
        else{
            alert("winner");
            const gameOverH1 = document.getElementById("game-over-message");
            gameOverH1.innerText = "We have a winner!";
            overlayElement.style.display = 'block';
            overlayElement.classList.remove('lose');
            overlayElement.classList.add('win');

        }
    }
    //handle the interactions from the user
    //styles the letters according to if it was correct or not
    //calls the other methods if it's wrong guess removeLife
    //if right showMatchedLetter and checkForWin is called
    handleInteraction(letterPicked,key){
        
        const phraseArr = this.activePhrase.phrase.split('');
        
        //if letter selected is (NOT) in phrase style it orange
        //use checkLetter to check if letter is in phrase
        if(!this.activePhrase.checkLetter(letterPicked)){
            key.classList.add('wrong');

            this.removeLife();
        }
        else{
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letterPicked);
            this.checkForWin();
        }
            key.disabled = true;
        
    }

}