var Word = require('./word.js');
var inquirer = require('inquirer');
var alpha = 'abcdefghijklmnopqrstuvwxyz';
var alphaArr = alpha.split('');
var lettersGuessed,
    randomWord,
    chosenWord,
    chances;

console.log('===============================\n');
console.log('Welcome to Harry Potter Hangman!');
console.log('\n===============================');

var bank = [
    "Harry",
    "Ron",
    "Hermione",
    "Ginny",
    "Malfoy",
    "Dumbledore",
    "Hagrid",
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin",
    "Hogwarts",
    "Sirius",
    "Lupin"
];


inquirer.prompt([{
    name: 'confirmation',
    type: 'confirm',
    message: 'Would you like to play?'
}]).then(function (answers) {

    if (answers.confirmation) {
        initialize();

        function chooseLetter() {
            if (chances > 0 && !chosenWord.finished()) {
                inquirer.prompt([{
                    name: 'letter',
                    type: 'input',
                    message: 'Please choose a letter',
                    validate: function (input) {
                        if (alphaArr.indexOf(input) === -1) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }]).then(function (answers) {
                    let guess = answers.letter.toUpperCase();
                    chosenWord.checker(guess);
                    if (lettersGuessed.indexOf(guess) === -1 && chosenWord.correctLetters.indexOf(guess) !== -1) {
                        lettersGuessed.push(guess);
                        print();
                        chooseLetter();
                    } else if (lettersGuessed.indexOf(guess) !== -1) {
                        console.log('\nThis letter has already been guessed');
                        print();
                        chooseLetter();
                    } else {
                        console.log('\nIncorrect. Chances Left: ' + --chances)
                        print();
                        chooseLetter();
                    }
                })
            } else if (chosenWord.finished()) {
                inquirer.prompt([{
                    name: 'again',
                    type: 'confirm',
                    message: 'Congratulations! You guessed the word. Play again?'
                }]).then(function (answers) {
                    if (answers.again) {
                        initialize();
                        chooseLetter();
                    } else {
                        console.log('\nThanks for playing!\n')
                        return;
                    }
                })
            } else {
                inquirer.prompt([{
                    name: 'over',
                    type: 'confirm',
                    message: "I'm sorry. The correct word was " + randomWord + ". Play again?"
                }]).then(function (answers) {
                    if (answers.over) {
                        initialize()
                        chooseLetter();
                    } else {
                        console.log('\nThanks for playing!\n')
                        return;
                    }
                })
            }
        }
        chooseLetter();
    } else {
        console.log('\nAlright. Come back soon!\n')
    }
})

function initialize() {
    randomWord = bank[Math.floor(Math.random() * bank.length)];
    console.log(randomWord);
    chosenWord = new Word(randomWord);
    console.log(chosenWord.correctLetters);
    lettersGuessed = [];
    chances = 8;
    print();
}

function print() {
    console.log('\n' + chosenWord.string() + '\n');
}