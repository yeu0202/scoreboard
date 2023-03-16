window.onload = function() {
    var x = document.getElementById("settings-panel");
    x.style.display = "none";
  };

var leftScore = 0
var rightScore = 0


function leftScorePlus(){
  leftScore++;
  updateScoreDisplay();
}
function rightScorePlus(){
  rightScore++;
  updateScoreDisplay();
}
function leftScoreMinus(){
  leftScore--;
  updateScoreDisplay();
}
function rightScoreMinus(){
  rightScore--;
  updateScoreDisplay();
}
function resetScores(){
  leftScore = 0;
  rightScore = 0;
  updateScoreDisplay();
}

function updateScoreDisplay(){
  document.getElementById("left-score").innerHTML = leftScore;
  document.getElementById("right-score").innerHTML = rightScore;
}

function toggleSettingsPanel(){
    var x = document.getElementById("settings-panel");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}