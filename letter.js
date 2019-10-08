function Letter(userGuess){
    this.userGuess = userGuess;
    this.guessed = false;
}

Letter.prototype.match = function (){
    if (this.userGuess === correctLetter){
        guessed = true;
        console.log("Correct!!");
        letter = correctLetter;
        console.log(correctLetter);
    } else {
        guessed = false;
        letter = " __ ";
    }
}

// var test = new Letter("y");
var correctLetter = "y";

// test.match();


module.exports = Letter;