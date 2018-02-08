var Letter = require('./letter.js');

// var word = process.argv[2];

function Word(word) {
    this.createLetters = function (word) {
        let letters = word.split('');
        let letterArr = [];
        for (let i in letters) {
            let letterUp = letters[i].toUpperCase();
            letterArr.push(new Letter(letterUp));
        }
        return letterArr;
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
    }
    this.word = this.createLetters(word);
};

module.exports = Word;