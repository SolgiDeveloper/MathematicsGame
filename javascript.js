let startBtn = document.getElementById("startReset");
let score = document.getElementById("scoreValue");
let timer = document.getElementById("timeRemaining");
let gameOver = document.getElementById("gameOver");
let timerValue = document.getElementById("timeRemainingValue");
let playerScore;
let playing = false;
let starting;
let timeRemaining;
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

}