var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};
// TEST: console.log(Scrabble.prototype.helloWorld());

Scrabble.prototype.score = function(word) {

  var word = word.toLowerCase();
  var points = 0;

  for (var i = 0; i < word.length; i++){

    var letter = word.charAt(i);

    switch (letter) {

      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'l':
      case 'n':
      case 'r':
      case 's':
      case 't':
        points += 1;
        // console.log(points)
      break;

      case 'd':
      case 'g':
        points += 2;
        // console.log(points)
      break;

      case 'b':
      case 'c':
      case 'm':
      case 'p':
        points += 3;
        // console.log(points)
      break;

      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        points += 4;
        // console.log(points)
      break;

      case 'k':
        points += 5;
        // console.log(points)
      break;

      case 'x':
      case 'j':
        points += 8;
        // console.log(points)
      break;

      case 'q':
      case 'z':
        points += 10;
        // console.log(points)
      break;

      default:
      console.log("hmm. something's wrong.");
        points = 0
    };
  };

  if ( word.length == 7) {
    // console.log("You earned 50 bonus points for using all of your tiles!");
    points += 50
  };
  // console.log("the score for " + word + " is " + points)
  return points
};

//Testing score function
// console.log(Scrabble.prototype.score("FROG"));
// console.log(Scrabble.prototype.score("$"));
// console.log(Scrabble.prototype.score("zZzZzz"));
// console.log(Scrabble.prototype.score(""));
// console.log(Scrabble.prototype.score("eeeeeee")); <--- BONUS for all 7 tiles


Scrabble.prototype.highestScoreFrom = function(arrayOfWords){
  var max_score = 0
  var highestScoringWords = [];
  // console.log(highestScoringWords);
  // iterate through the words and find the scores for each. if the score is greater than or equal to the max score so far, set max score equal to the score of that word
  for (var i=0; i < arrayOfWords.length; i++) {
      Scrabble.prototype.score(arrayOfWords[i])
      if (Scrabble.prototype.score(arrayOfWords[i]) >= max_score){
        max_score = Scrabble.prototype.score(arrayOfWords[i]);
      };
  };
// iterate through the array of words and score each one, if the score matches max score, put the word into the highestScoringWords array
  for (var i=0; i < arrayOfWords.length; i++) {
      Scrabble.prototype.score(arrayOfWords[i])
      if (Scrabble.prototype.score(arrayOfWords[i]) == max_score){
          highestScoringWords.push(arrayOfWords[i]);
      }
      // console.log(highestScoringWords);
    }
// If there is only one element in the highscoringwords array, return that element because it's the winner
        if (highestScoringWords.length == 1){
          return highestScoringWords[0];
        }
// If there is more than one element in th highestScoringWords array, there was a tie
        else { //sort the words in the array by their length, longest first
              highestScoringWords.sort(function(a,b){ return a.length < b.length});
              //if there is a 7 letter word, it wins
                if (highestScoringWords[0].length == 7){ return highestScoringWords[0]}
              // otherwise, take the shortest highestscoringword, in this case the one on the end because I sorted the array
                else {return highestScoringWords.pop();}
          }
            // console.log(highestScoringWords);
  };

//TESTS
//Order shouldn't matter in the array of words...
// console.log(Scrabble.prototype.highestScoreFrom(["frog", "cat", "xxxxxx"]));
// console.log(Scrabble.prototype.highestScoreFrom(["frog", "xxxxxx", "cat"]));
// console.log(Scrabble.prototype.highestScoreFrom(["xxxxxx", "frog" , "cat"]));

// If words are tied, the 7-letter words should win
// console.log(Scrabble.prototype.highestScoreFrom(["aaaaaab", "qqqqqj"]));

//If words are tied, but none are 7 letters, the shortest word should win
// console.log(Scrabble.prototype.highestScoreFrom(["ff", "x"]))

module.exports = Scrabble;
