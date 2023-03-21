var highscoresContainer = document.querySelector('#highscores');
var highscores = JSON.parse(localStorage.getItem('highscores'));
var clearButton = document.querySelector('#clear');

for(let i = 0; i < highscores.length; i++){                         
    var leaderboard = document.createElement('li');
    leaderboard.textContent = highscores[i].Initial + " " + highscores[i].Score;
    highscoresContainer.appendChild(leaderboard)
}

clearButton.addEventListener('click', function(){
    highscoresContainer.setAttribute('class','hide');
    localStorage.removeItem('highscores');
})