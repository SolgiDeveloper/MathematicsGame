let startBtn = document.getElementById("startReset");
let score = document.getElementById("scoreValue");
let timer = document.getElementById("timeRemaining");
let gameOver = document.getElementById("gameOver");
let timerValue = document.getElementById("timeRemainingValue");
let question = document.getElementById("question");
let playerScore;
let playing = false;
let starting;
let timeRemaining;
let correctAnswer;
let wrongAnswer;
let answers;
startBtn.onclick = function () {
  if (playing == true) {
    location.reload(); // reload page
    // playing = false;
  } else {
    playing = true;
    playerScore = 0;
    score.innerHTML = playerScore;
    show("timeRemaining");
    hide("gameOver");
    startBtn.innerHTML = "Reset Game";
    timeRemaining = 60;
    timerValue.innerHTML = timeRemaining;
    startCountDown();
    generateQA();
  }
};
//functions
//start counter
function startCountDown() {
  starting = setInterval(function () {
    timeRemaining--;
    timerValue.innerHTML = timeRemaining;
    if (timeRemaining == 0) {
      stopCountDown();
      gameOver.innerHTML
        = "game over!"
        + "<br>"
        + "your score is "
        + playerScore + ".";
      show("gameOver");
      hide("timeRemaining");
      hide("correct");
      hide("tryAgain");
      startBtn.innerHTML = "Start Game";
      playing = false;
    }
  }, 1000);
}
//stop counter
function stopCountDown() {
  clearInterval(starting);
}
// hide an element
function hide(Id) {
  document.getElementById(Id).style.display = 'none';
}
// show an element
function show(Id) {
  document.getElementById(Id).style.display = 'block';
}
function generateQA() {
  let x = Math.round(Math.random() * 9) + 1;
  let y = Math.round(Math.random() * 9) + 1;
  correctAnswer = x * y;
  question.innerHTML = x + "×" + y;
  let correctPosition = Math.round(Math.random() * 3) + 1;
  document.getElementById("box" + correctPosition).innerHTML = correctAnswer;

  // fill other Answer boxes with wrong number
  answers = [correctAnswer];
  for (let i = 1; i < 5; i++) {

    if (i !== correctPosition) {

      do {
        wrongAnswer = (Math.round(Math.random() * 9) + 1) * (Math.round(Math.random() * 9) + 1);
      } while (answers.indexOf(wrongAnswer) > -1);
      answers.push(wrongAnswer);
      document.getElementById("box" + i).innerHTML = wrongAnswer;
    }
  }
}
for (let i = 1; i < 5; i++) {
  document.getElementById("box" + i).onclick = function () {
    if (playing == true) {
      if (this.innerHTML == correctAnswer) {
        playerScore++;
        score.innerHTML = playerScore;
        hide("tryAgain");
        show("correct");
        setTimeout(function () {
          hide("correct");
        }, 1000);
        // Ganarate new Q & A
        generateQA();
      } else if (playerScore == 0) {
        stopCountDown();
        gameOver.innerHTML
          = "game over!"
          + "<br>"
          + "you lose 😢";
        show("gameOver");
        hide("timeRemaining");
        hide("correct");
        hide("tryAgain");
        startBtn.innerHTML = "Start Game";
        playing = false;
      } else {
        playerScore--;
        score.innerHTML = playerScore;
        hide("correct");
        show("tryAgain");
        setTimeout(function () {
          hide("tryAgain");
        }, 1000);
      }
    }
  }
}
