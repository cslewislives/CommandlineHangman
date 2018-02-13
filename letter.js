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