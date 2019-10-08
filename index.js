var inquirer = require("inquirer");
var Word = require("./word");
var userGuess = "";


function startGame (){
    var wordArr = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord"];
    var chosenWord = wordArr[Math.floor(wordArr.length * Math.random())];
    var newWord = new Word(chosenWord, userGuess);
    
    // game();
    console.log(chosenWord);
    console.log(newWord.letters.createLetters());
    inquirer.prompt([
        {
            type: "input",
            message: "Choose a Letter",
            name: "letter"
        }
    ]).then(function(answer){
        userGuess = answer.letter;
        newWord.letters.createLetters();
        console.log(chosenWord);

    })
   
}
startGame();

