var userGuess = "p";
var letters = [];
function Letter(chosenWord, letters){
    var workingWord = [];
    this.chosenWord = chosenWord;
    this.letters = letters;
    this.createLetters = function (){
        var alreadyChosen = {
            letter: userGuess,
            guessed: false
        }

        for (var i = 0; i < this.chosenWord.length; i++){
            console.log(this.chosenWord[i])
            if (userGuess === this.chosenWord[i]){
                if (alreadyChosen.guessed = true){
                    console.log("You've already tried this letter.");
                } else {
                    alreadyChosen.guessed = true;
                }
                // letters.splice(getIndex, 1, userGuess);
                workingWord.push(this.chosenWord[i]);
            } else {
                if (alreadyChosen.guessed = true){
                    console.log("You've already tried this letter.");
                } else {
                    alreadyChosen.guessed = true;
                }
                workingWord.push("__");
            }
            console.log("Letters: " + letters);
        }    

        console.log("Blanks: " + workingWord);
        }
    }
var letters = [];
var test = new Letter("spam", letters);
test.createLetters();


module.exports = Letter;
