var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", function(req, res) {
	console.log(req.body.body)
	var frequency = fiftyFrequency(String(req.body.body))
	var WordCount = totalWordCount(String(req.body.body))
	var percentageWhitespace = percentageOfWhitespace(String(req.body.body))
	var percentagePunctuation = percentageOfPunctuation(String(req.body.body))

	console.log({
		Frequency: frequency,
		WordCount: WordCount,
		WhitespacePercentage: percentageWhitespace,
		PunctuationPercentage: percentagePunctuation
	})
});

var fiftyFrequency = function(body) {
	//remove all punctuation:
	var noPunctuation = body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
	console.log(noPunctuation)
	//make an array of every word: split
	var wordArray = noPunctuation.split(" ");
	var countsObject = new Object();
	for (var i = 0; i < wordArray.length; i++) {
		if (wordArray[i] in countsObject) {
			countsObject.wordArray[i]++
		}
		else {
			countsObject[wordArray[i]] = 1

		}
	}
	var frequency = []
	for (var k in countsObject) {
		if (countsObject.hasOwnProperty(k)) {
			var objectBuilder = {
				Word: k,
				Frequency: countsObject[k]
			}
			frequency.push(objectBuilder)
		}
	}
	//sort 'var frequency' array by frequency term then by alphabetical
	frequency.sort(function(a, b){return a.Frequency - b.Frequency});
	//remove words beyond 50
	frequency.slice(0,49)
	//return 'var frequency'
	return frequency
}

var totalWordCount = function(body) {
	//remove all punctuation:
	var noPunctuation = body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	//make an array of every word: split
	var wordArray = noPunctuation.split(" ");
	//return length of array
	return wordArray.length
}

var percentageOfWhitespace = function(body) {
	//find number of total characters
	var totalCharacters = body.length
	//find number of whitespaces (maybe have to extrapolate spaces between words)
	var charactersWithoutWhitespace = body.replace(/\s/g, "").length;
	var numberOfWhitespace = totalCharacters-charactersWithoutWhitespace
	//divide and return percentage
	return (numberOfWhitespace/totalCharacters)
}

var percentageOfPunctuation = function(body) {
	//find number of total characters
	var totalCharacters = body.length
	//find number of punctuation marks
	var noPunctuation = body.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").length;
	var numberOfPunctuation = totalCharacters-noPunctuation
	//divide and return percentage
	return numberOfPunctuation/totalCharacters
}

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});