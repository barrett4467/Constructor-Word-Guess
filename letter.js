// var userGuess = "p";
var letters = [];
function Letter(chosenWord, userGuess){
    var workingWord = [];
    this.chosenWord = chosenWord;
    this.letters = letters;
    this.createLetters = function (){

        for (var i = 0; i < this.chosenWord.length; i++){

            if (userGuess === this.chosenWord[i]){

                // letters.splice(getIndex, 1, userGuess);
                workingWord.push(this.chosenWord[i]);
            } else {
                workingWord.push("__");
            }
        }    

        console.log(workingWord.join(" "));
        }
    }
// var letters = [];
// var test = new Letter("spam", letters);
// test.createLetters();


module.exports = Letter;
