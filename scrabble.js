
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
  // console.log("the score for " + word + " is " + points)

  if ( word.length == 7) {
    // console.log("You earned 50 bonus points for using all of your tiles!");
    points += 50
  };
  return points
};

//Testing score function
// console.log(Scrabble.prototype.score("FROG"));
// console.log(Scrabble.prototype.score("$"));
// console.log(Scrabble.prototype.score("zZzZzz"));
// console.log(Scrabble.prototype.score(""));
// console.log(Scrabble.prototype.score("eeeeeee")); <--- BONUS for all 7 tiles

// highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
// Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters.
// Note that there is a bonus (50 points) for using all seven letters. If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
// If the there are multiple words that are the same score and same length, pick the first one in supplied list.
Scrabble.prototype.highestScoreFrom = function(arrayOfWords){
  max_score = 0

  for (var i=0; i < arrayOfWords.length; i++) {
      Scrabble.prototype.score(arrayOfWords[i])
      if (Scrabble.prototype.score(arrayOfWords[i]) > max_score){
        max_score = Scrabble.prototype.score(arrayOfWords[i]);
      };
  };
  for (var i=0; i < arrayOfWords.length; i++) {
      Scrabble.prototype.score(arrayOfWords[i])
      if (Scrabble.prototype.score(arrayOfWords[i]) == max_score){
        // console.log(arrayOfWords[i] + " has the largest score of " + max_score )
        return arrayOfWords[i];
      };
    };
};

//TESTS
//Order shouldn't matter in the array of words...
// console.log(Scrabble.prototype.highestScoreFrom(["frog", "cat", "xxxxxx"]));
// console.log(Scrabble.prototype.highestScoreFrom(["frog", "xxxxxx", "cat"]));
// console.log(Scrabble.prototype.highestScoreFrom(["xxxxxx", "frog" , "cat"]));

module.exports = Scrabble;
