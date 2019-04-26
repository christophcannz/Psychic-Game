var letterArray = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","b","b","b","b","b","b","b","b","b","x", "y", "z",]
var guessedLetters;
var guesses = 7;
var correctCount = 0;
var incorrectCount = 0;
var chosenLetter;

function startGame() {
    guessedLetters=[]
    assignLetter();
    document.onkeyup=function(event){
        verifyInput(event.key.toLowerCase);
        console.log("button Pressed");
    }
}

function assignLetter() { //the value of letter array at the index
    var index = Math.floor(Math.random() * letterArray.length);
    chosenLetter=letterArray[index];
}

function verifyInput(input){
    if (input==="a") {checkInput(input);}
    else if (input==="b") {checkInput(input);}
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
        //a guess would be used
        guesses--;
        //should remain on current letter until guess correctly
        guessedLetters.push(input);
        //guesses would be used up.
    }
    checkLossConditions();
}

/*event.key.toLowerCase()

if input!=chosenLetter {
	guesses = guesses -1;
	guessedLetters = guessedLetters+input+" ";
}
*/
startGame();
console.log(chosenLetter);