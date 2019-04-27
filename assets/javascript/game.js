var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
var guessedLetters;
var guesses = 7;
var correctCount = 0;
var incorrectCount = 0;
var chosenLetter;

function startGame() {
    guessedLetters=[]
    assignLetter();
    document.onkeyup=function(event){
        verifyInput(event.key.toLowerCase());
        console.log(event.key.toLowerCase());

    }
}

function assignLetter() { //the value of letter array at the index
    var index = Math.floor(Math.random() * letterArray.length);
    chosenLetter=letterArray[index];
}

function verifyInput(input){
    if (input===chosenLetter) {
        // checkInput(input);
        console.log('correct guess');
    } else {
        // checkInput(input);
        console.log('incorrect guess');
    }

    console.log(input);
}

function checkInput(input){
    if (alreadyGuessed(input)) {
        guesses--;
        // already Guessed! Try Again
    } else if(isAnswer(input)){
        //win conditions
        //add one to wins
        correctCount++;
        //set guess letters to an empty array
        guessedLetters=[];
        //generate a new letter
        assignLetter();
    } else {
        //bad guess conditions
        //add one to losses
        incorrectCount++;
        document.getElementById("incorrect")
        //a guess would be used
        guesses--;
        //should remain on current letter until guess correctly
        guessedLetters.push(input);
        //guesses would be used up.
    }
    checkLossConditions();
    
}
        
    var correct = document.getElementById("correct")
    var incorrect = document.getElementById("incorrect")
    var guessesleft = document.getElementById("guessesleft")
    var guessesmade = document.getElementById("guessesmade")

    correct.textContent= '0'
    incorrect.textContent= '0'
    guessesleft.textContent='0'
    guessesmade.textContent='0'


startGame();
console.log(chosenLetter);



/*event.key.toLowerCase()

if input!=chosenLetter {
	guesses = guesses -1;
	guessedLetters = guessedLetters+input+" ";
}
*/


