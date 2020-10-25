let startBtn = document.getElementById("startReset");
let score = document.getElementById("scoreValue");
let timer = document.getElementById("timeRemaining");
let gameOver = document.getElementById("gameOver");
let timerValue = document.getElementById("timeRemainingValue");
let playerScore;
let playing = false;
startBtn.onclick = function () {
  if (playing == true) {
    location.reload(); // reload page
    // startBtn.innerHTML = "Start Game";
    playing = false;
  } else {
    playing = true;
    playerScore = 0;
    score.innerHTML = playerScore;
    timer.style.display = 'block';
    startBtn.innerHTML = "Reset Game";
    start();
  }
};

function start() {
  let t = 59;
  let starting = setInterval(function () {
    timerValue.innerHTML = t;

    if (t == 0) {
      clearInterval(starting);
      gameOver.innerHTML
        = "game over!"
        + "<br>"
        + "your score is "
        + playerScore;
      gameOver.style.display = 'block';

      playing = true;
    }
    t--;
  }, 1000);




}

