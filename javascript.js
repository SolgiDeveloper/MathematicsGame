let startBtn = document.getElementById("startReset");
let score = document.getElementById("scoreValue");
let timer = document.getElementById("timeRemaining");
let gameOver = document.getElementById("gameOver");
let timerValue = document.getElementById("timeRemainingValue");
let playerScore;
let playing = false;
startBtn.onclick = function () {
  if (playing) {
    location.reload();
    startBtn.innerHTML = "Start Game";
    playing = false;
  } else {
    score.innerHTML = 0;
    playerScore = 0;
    timer.style.display = 'inline';
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
      gameOver.style.display = 'inline';
      startBtn.innerHTML = "Reset Game";
      playing = true;
    }
    t--;
  }, 1000);




}

