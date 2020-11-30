var readlineSync = require("readline-sync");

var score = 0;
console.log("Description: This quiz is about Kartikey that how much you know him ------")

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + ". Let's figure out how much you know Kartikey?");
console.log("Let's start the quiz: ");

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer == answer) {
    console.log("Right Answer.");
    score += 1;
    console.log("Current Score: ", score);
  } else {
    console.log("Wrong Answer.");
    console.log("Current Score: ", score);
  }
}

var question = [{
  question: "Where do I live? ",
  answer: "Lucknow"
}, {
  question: "My favourite superhero would be? ",
  answer: "Mogli"
}, {
  question: "Where do I work? ",
  answer: "Home"
}];

for (var i=0; i<question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("----------------------");
console.log("YAY! Your Final score: ",score);