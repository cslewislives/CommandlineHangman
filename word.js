var Letter = require('./letter.js');

function Word(word) {
    this.correctLetters = [];
    this.letterObjs = [];
    this.createLetters = function (word) {
        let letters = word.split('');
        for (let i in letters) {
            let letterUp = letters[i].toUpperCase();
            this.correctLetters.push(letterUp);
            this.letterObjs.push(new Letter(letterUp));
        }
        return this.letterObjs;
    };
    
    this.string = function () {
        let wordStr = '';
        for (let i in this.word) {
            wordStr += this.word[i].underline();
        }
        return wordStr;
    };

    this.checker = function(character) {
        for (let i in this.word) {
            this.word[i].check(character);
        }
    };

    this.word = this.createLetters(word);
};

Word.prototype.finished = function() {
    for (let i in this.letterObjs) {
        if (!this.letterObjs[i].guessed) return false;
    }
    return true;
}

module.exports = Word;