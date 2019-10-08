var inquirer = require("inquirer");
var wordArr = ["ankle"];
var chosenWord = wordArr[Math.floor(wordArr.length * Math.random())];
var correctGuess = [];
letters = [];


for (var i = 0; i < chosenWord.length; i++){
    var wordLength = chosenWord[i].length; 
    letters.push(chosenWord[i]);

}
function startGame (){
    console.log("Chosen Word: " + chosenWord);
    console.log("Correct letter: " + correctGuess);
    console.log("letters: " + letters.join(", "));
    
    for (var i = 0; i < letters.length; i++){
        correctGuess.push(" __ ");
    }
}
startGame();
var userGuess = "a";

for (var i = 0; i < chosenWord.length; i++){
    var getIndex = letters.indexOf(userGuess);
    if (userGuess === chosenWord[i]){
        letters.splice(getIndex, 1, userGuess);
    } 
}
console.log("Index: " + getIndex);

if (userGuess === letters[getIndex]){
    correctGuess.splice(getIndex, 1, userGuess);
}

console.log(correctGuess);
// inquirer.prompt([
//     {
//         type: "list",
//         message: "Choose a letter",
//         choices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//         name: "letter"
//     }
// ]).then(function(answer){
//     if (answer.letter === correctLetter){
//         console.log("Yess You're right");
//         console.log(word)
//     } else {
//         console.log("nope that's wrong");
//     }
// })