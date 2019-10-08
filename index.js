var inquirer = require("inquirer");
var Word = require("./word");

var letter = require("./letter.js");
var run = new letter("x");
letter = [];
var guessed = false;
var wordArr = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord"];
var chosenWord = wordArr[Math.floor(wordArr.length * Math.random())];
var positions = [];



ConstructWord();
playGame();
function playGame(){

    inquirer.prompt([
        {
            type: "list",
            message: "Choose a letter",
            choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
            name: "letter"
        }
    ]).then(function(answer){
        for (var i = 0; i < chosenWord.length; i++){
            chosenWord = chosenWord[i];
            letter = "a";
        }
        console.log("chosen: " + chosenWord);
        if (answer.letter === letter){
            guessed = true;
        } else {
            guessed = false;
            console.log("nope");

        }if (guessed === true){
            console.log(letter);
        } else {
            console.log("__");
        }
        console.log(positions);
        playGame();
    })
}



var startWord = new Word(chosenWord);
function ConstructWord(){
        if (guessed === false){
            positions.push("__");
        } else {
            positions.push(letter);
        }
        run.match();
    
    console.log(chosenWord);
    console.log(positions.join(" "));
}
