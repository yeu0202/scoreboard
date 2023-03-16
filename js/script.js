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

function openSettingsPanel(){

}

function closeSettingsPanel(){

}