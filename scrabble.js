var Scrabble = function() {
  this.score = score;
  this.highestScoreFrom = highestScoreFrom;
};

var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.playerPoints = 0;
};

//TEST making a new player
// var erin = new Player("Erin")
// console.log(erin.name);
// console.log(erin.plays);
// console.log(erin.playerPoints);

Player.prototype.hasWon = function(){
  if (this.playerPoints > 100){
    return true;
  }
  else {
    return false;
  }
};

//TEST if a player has won
// console.log(erin.hasWon()); //<--- 0 points, should be false
// erin.playerPoints = 105;
// console.log(erin.hasWon()); //<---- 105 points, should be true

Scrabble.score = function(word) {

  var word = word.toLowerCase();
  var wordPoints = 0;

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
        wordPoints += 1;
        // console.log(points)
      break;

      case 'd':
      case 'g':
        wordPoints += 2;
        // console.log(points)
      break;

      case 'b':
      case 'c':
      case 'm':
      case 'p':
        wordPoints += 3;
        // console.log(points)
      break;

      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        wordPoints += 4;
        // console.log(points)
      break;

      case 'k':
        wordPoints += 5;
        // console.log(points)
      break;

      case 'x':
      case 'j':
        wordPoints += 8;
        // console.log(points)
      break;

      case 'q':
      case 'z':
        wordPoints += 10;
        // console.log(points)
      break;

      default:
      console.log("hmm. something's wrong.");
        wordPoints = 0
    };
  };

  if ( word.length == 7) {
    // console.log("You earned 50 bonus points for using all of your tiles!");
    wordPoints += 50
  };
  // console.log("the score for " + word + " is " + points)
  return wordPoints
};

//Testing score function
// console.log(Scrabble.score("CATS"));
// console.log(Scrabble.prototype.score("$"));
// console.log(Scrabble.prototype.score("zZzZzz"));
// console.log(Scrabble.prototype.score(""));
// console.log(Scrabble.prototype.score("eeeeeee")); <--- BONUS for all 7 tiles

Player.prototype.play = function(word) {
  if (this.hasWon() == true){
    return false
  }
  else {
    this.plays.push(word);
    this.playerPoints += Scrabble.score(word);
    return word
  }
}
//TEST Play word function, should return false if already won
var erin = new Player("Erin");
// erin.playerPoints = 105;
// console.log(erin.play("cats"));

// TEST If the player has less than 100 points, Play word function should put the word in the player's plays array and increments the player's score
// erin.playerPoints = 10;
// console.log(erin.playerPoints);
// console.log(erin.plays);
// erin.play("cats");
// console.log(erin.plays);
// console.log(erin.playerPoints);

Scrabble.highestScoreFrom = function(arrayOfWords){
  var max_score = 0
  var highestScoringWords = [];
  // console.log(highestScoringWords);
  // iterate through the words and find the scores for each. if the score is greater than or equal to the max score so far, set max score equal to the score of that word
  for (var i=0; i < arrayOfWords.length; i++) {
      Scrabble.score(arrayOfWords[i])
      if (Scrabble.score(arrayOfWords[i]) >= max_score){
        max_score = Scrabble.score(arrayOfWords[i]);
      };
  };
// iterate through the array of words and score each one, if the score matches max score, put the word into the highestScoringWords array
  for (var i=0; i < arrayOfWords.length; i++) {
      Scrabble.score(arrayOfWords[i])
      if (Scrabble.score(arrayOfWords[i]) == max_score){
          highestScoringWords.push(arrayOfWords[i]);
      }
      // console.log(highestScoringWords);
    }
// If there is only one element in the highscoringwords array, return that element because it's the winner
        if (highestScoringWords.length == 1){
          return highestScoringWords[0];
        }
// If there is more than one element in the highestScoringWords array, there was a tie
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
// console.log(Scrabble.highestScoreFrom(["aaaaaab", "qqqqqj"]));

//If words are tied, but none are 7 letters, the shortest word should win
// console.log(Scrabble.prototype.highestScoreFrom(["ff", "x"]))

//Function which returns the highest scoring word the user has played
Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
}
// TEST highestScoringWord
erin.play("cats");
erin.play("a")
// console.log(erin.highestScoringWord()); //<--- should return "cats" because it's worth more points than "a"

Player.prototype.totalScore = function() {
  return this.playerPoints
}

// TEST totalScore
//console.log(erin.totalScore()); //<--- should return 7 because cats = 6 and a = 1

Player.prototype.highestWordScore = function() {
  return Scrabble.score(this.highestScoringWord());
}

//TEST highestWordScore
console.log(erin.highestWordScore()); //<--- should return 6, because cats is the highest scoring word and it's worth 6 points  

module.exports = Scrabble;


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
// TEST: console.log(Scrabble.prototype.helloWorld());
