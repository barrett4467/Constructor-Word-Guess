var inquirer = require("inquirer");
var wordArr = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord"];
var chosenWord = wordArr[Math.floor(wordArr.length * Math.random())];
var correctGuess = [];
letters = [];
var count = 0;
var incorrectGuesses = 0;
var celebrateArr = ["Celebrate Good Times!! Come On! You've won!!", "Look at you go Champ!!", "You’ve got it made!", "SUPER", "WINNER WINNER CHICKEN DINNER"];
var celebrate = celebrateArr[Math.floor(Math.random() * celebrateArr.length)]

for (var i = 0; i < chosenWord.length; i++){
    letters.push(chosenWord[i]);

}
function startGame (){
   
    console.log("Chosen Word: " + chosenWord);
    console.log("Correct letter: " + correctGuess);
    console.log("letters: " + letters.join(", "));
    
    for (var i = 0; i < letters.length; i++){
        correctGuess.push("__");
    }
    game();
}

function letterConst (){
    
    for (var i = 0; i < letters.length; i++){
        var getIndex = letters.indexOf(userGuess);
        if (userGuess === chosenWord[i]){
            letters.splice(getIndex, 1, userGuess);
        } 
    }
    
    if (userGuess === letters[getIndex]){
        correctGuess.splice(getIndex, 1, userGuess);
        count++;
    } else {
        console.log("Incorrect guess! Try again.");
        incorrectGuesses++;
    }
    
    console.log(correctGuess.join(" "));
}

function stopGame(){
    console.log("Game Over!!");
}

startGame();
function game (){
    if (count < letters.length || incorrectGuesses === 10){
        inquirer.prompt([
            {
                type: "list",
                message: "Choose a letter",
                choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
                name: "letter"
            }
        ]).then(function(answer){
            userGuess = answer.letter;
            letterConst();
            game();
        })
        console.log(incorrectGuesses);
    } else{
        console.log("======================");
        console.log(celebrate);
    }
}
