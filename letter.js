/**
 * @file Constructs Letter object for Command Line Hangman 
 * @author Joshua C.S. Lewis
 * @version 1.0 
*/


/** 
 * @constructor Letter
 * @param {string} character - Letter input by user.
 * @returns {Object} Object that defines each Letter.
*/
function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.underline = function() {
        if (this.guessed) {
            return character;
        } else {
            return ' _ '
        }
    };
    this.check = function(input) {
        if (input === this.character) {
            this.guessed = true;
            this.underline();
        }
    };
}

module.exports = Letter;