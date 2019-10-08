function Word (chosenWord){
    var letters = [];

    this.lettersInWord = [];
    this.chosenWord = chosenWord;
    this.checkLetter = function(chosenWord){
        this.lettersInWord.push(letters);
        this.numberLetters = this.chosenWord.length
    }
    for (var i = 0; i < chosenWord.length; i++){
        letters = chosenWord[i];
    }
    console.log(letters);
}



module.exports = Word;