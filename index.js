var Word = require('./word.js');
var inquirer = require('inquirer');

console.log('Welcome to Command Line Harry Potter Hangman!');

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

var randomWord = bank[Math.floor(Math.random() * bank.length)];

var chosenWord = new Word(randomWord);

console.log(chosenWord);

inquirer.prompt([
    {
        name: 'name',
        message: 'Hello Player! What is your name?'
    },
    {
        name: 'confirmation',
        type: 'confirmation',
        message: 
    }
])