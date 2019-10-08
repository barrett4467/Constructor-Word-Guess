// var userGuess = "p";
var letters = [];
function Letter(chosenWord, userGuess){
    var workingWord = [];
    this.chosenWord = chosenWord;
    this.letters = letters;
    this.correctGuess = false;
    this.createLetters = function (){

        for (var i = 0; i < this.chosenWord.length; i++){
            workingWord.push("__");
            if (userGuess === this.chosenWord[i]){
                this.correctGuess = true;
                // letters.splice(getIndex, 1, userGuess);
                // workingWord.push(this.chosenWord[i]);
            } else {
                this.correctGuess = false;
                
            }

        }  
        console.log(workingWord.join(" "));  
        if (this.correctGuess === true){
            letters.push(userGuess);
        }else {
            
        }
        console.log(workingWord);
        }
    }
// var letters = [];
// var test = new Letter("spam", letters);
// test.createLetters();


module.exports = Letter;
