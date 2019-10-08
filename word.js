var Letter = require("./letter");
var letters = [];
// var userGuess = "e";

// var test = new Letter(chosenWord, userGuess, letters);

// if (userGuess != letters){
//     console.log("=========");
//     console.log("Incorrect");
//     console.log("=========");
// }
// test.createLetters();


function Word (chosenWord, userGuess){
    this.chosenWord = chosenWord;
    this.letters = new Letter(chosenWord, userGuess);
}


module.exports = Word;