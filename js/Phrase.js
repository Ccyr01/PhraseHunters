/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
        const phraseArr = this.phrase.split('');
    }

    addPhraseToDisplay(){
        //<li class="hide letter h">h</li>
        // console.log(this.phrase.length);
        const phraseElement = document.getElementById('phrase');
        
        console.log(this.phraseArr);
        console.log(phraseElement);
        const ulElement = document.querySelector('ul');
        const myPhrase = this.phrase;

        phraseArr.forEach(letter =>{
            const liElement = document.createElement('li');
            liElement.textContent = letter;
            if(letter === ' '){
                liElement.setAttribute('class', 'space');

            }
            liElement.setAttribute('class',`hide letter ${letter}`);
            console.log(liElement.textContent);

            ulElement.appendChild(liElement);

        })
        // getRandomPhrase(){
        //     const phrase = t
        // }
        // showMatchedLetter(){


        // }
        // checkLetter(){

        // }
    }

}