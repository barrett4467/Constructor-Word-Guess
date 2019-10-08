var inquirer = require("inquirer");
var Word = require("./word");

var letter = require("./letter.js");

function startGame (){
    var wordArr = ["awkward", "bagpipes", "banjo", "bungler", "croquet", "crypt", "dwarves", "fervid", "fishhook", "fjord"];
    var chosenWord = wordArr[Math.floor(wordArr.length * Math.random())];
    var newWord = new Word(chosenWord);
    newWord.letters.createLetters();
    // game();
    console.log(chosenWord);
   
}
startGame();