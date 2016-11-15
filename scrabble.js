
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
        points += 8;
        // console.log(points)
      break;

      default:
      console.log("hmm. something's wrong.");
    };
  };
  console.log("the score for " + word + " is " + points)
  return points
};

 console.log(Scrabble.prototype.score("FROG"));


module.exports = Scrabble;
