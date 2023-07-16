/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        this.phraseArr = this.phrase.split('');
    }

    addPhraseToDisplay(){
        //<li class="hide letter h">h</li>
        // console.log(this.phrase.length);
        const phraseElement = document.getElementById('phrase');
        
        // console.log(this.phraseArr);
        // console.log(phraseElement);
        const ulElement = document.querySelector('ul');
        const myPhrase = this.phrase;

        this.phraseArr.forEach(letter =>{
            const liElement = document.createElement('li');
            liElement.textContent = letter;
            if(letter === ' '){
                liElement.setAttribute('class', 'space');

            }
            else{
                liElement.setAttribute('class',`hide letter ${letter}`);
                // console.log(liElement.textContent);

            }
            ulElement.appendChild(liElement);


        })
        ///TODO need to figure out where to put
        //add event listeners on each key on keyboard user could pick from
        // const keys = document.querySelectorAll('.key');
        // keys.forEach(key => {
        //     key.addEventListener('click', () => {
        //     // Handle key click event here
        //     if(this.checkLetter(key.textContent)){
        //         this.showMatchedLetter(key.textContent);
        //     }
        //     });
        // });
    }

    //checks for letter then prints to console
    checkLetter(letter){
        if(this.phraseArr.includes(letter)){
            return true;
        }
        else{
            return false;
        }
    }
    
    showMatchedLetter(letter){
        const letters = document.querySelectorAll(`.hide.letter.${letter}`);
        letters.forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
            
            
        })

    }
    

}