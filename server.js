var express = require("express");
var app = express();
app.use(express.static("public"));


app.post("/", function(req, res) {



});

var fiftyFrequency = function(body) {
	//remove all punctuation:

	//make an array of every word:  split

	//for each word, make an object with number of times it appears:

	//sort 'var frequency' array by frequency term then by alphabetical

	//remove words beyond 50

	//return 'var frequency'
}

var totalWordCount = function(body) {
	//remove all punctuation:

	//make an array of every word: split

	//return length of array
}

var percentageOfWhitespace = function(body) {
	//find number of total characters

	//find number of whitespaces (maybe have to extrapolate spaces between words)

	//divide and return percentage
}

var percentageOfPunctuation = function(body) {
	//find number of total characters

	//find number of punctuation marks

	//divide and return percentage
}