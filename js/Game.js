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
        this.activePhrase.addPhraseToDisplay(this.activePhrase);
        this.handleInteraction();
        this.checkForWin();
    }
    getRandomPhrase(){

        const phrase =  this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return phrase;
    }
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
                
            }
        });
        this.missed++;
        //check if last life is taken
        if(this.missed === 5){
            this.gameOver();
        }
        
        //checks if there is an image to change based on lastIndex
        //It will either have an index num on the img that needs to be changed
        //or it is going to be -1
        if (lastIndex > -1) {
            const lastImage = images[lastIndex];
            lastImage.setAttribute('src', 'images/lostHeart.png');
        }
    }
    checkForWin(){
        const li = document.querySelectorAll('.hide.letter');
        let count =0;
        li.forEach(listItem => {
            count++;
            console.log("item " +listItem.textContent+" count "+count);

        })
        if(count === 0){
            alert("winner");
            const gameOverH1 = document.getElementById("game-over-message");
            gameOverH1.innerText = "We have a winner!";

            overlayElement.style.display = 'block';
            overlayElement.classList.add('win');
        }
    }
    gameOver(){
        const gameOverH1 = document.getElementById("game-over-message");
        

        overlayElement.style.display = 'block';
        overlayElement.classList.add('lose');
        gameOverH1.innerText = "Sorry you lost. Try again.";
        alert("game over");
    }
    handleInteraction(){
        
        const phraseArr = this.activePhrase.phrase.split('');
        console.log(phraseArr);
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.addEventListener('click', () => {
            
            //if letter selected is (NOT) in phrase style it orange
            
            if(!phraseArr.includes(key.textContent)){
                key.classList.add('wrong');

                this.removeLife();
            }
            else{
                key.classList.add('chosen');
                this.activePhrase.showMatchedLetter(key.textContent);
                this.checkForWin();


            }
            key.disabled = true;

            
            });
            
            
        });
         
    }
   

    
}