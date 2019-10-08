var Letter = require("./letter");
var letters = [];
var chosenWord = "spam";

var test = new Letter(chosenWord, letters);
test.createLetters();
console.log(letters);

function Word (chosenWord){

}

module.exports = Word;