var inquirer = require("inquirer");

var words = ['dog', 'horse', 'pig', 'cat'];
var placeHolder = [];
var wrongGuess = [];

var word = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < word.length; i++){
    placeHolder.push(' _'); 
}