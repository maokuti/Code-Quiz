// Create a code quiz that contains the following requirements:
// A start button that when clicked a timer starts and the first question appears.
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score

// Prepare the questions in question.js file
// var questions = ...

var score = 0;
var currentQuestion = 0;
var counter;
var timer;

// Prepare all selector that we might need to point to the html element
var startButton = document.querySelector('#start');
var submitButton = document.querySelector('#submit');
var startScreenElement = document.querySelector('#start-screen');
var endScreenElement = document.querySelector('#end-screen');
var questionsTitle = document.querySelector('#question-title');
var questionsContainer = document.querySelector('#questions-container');
var choicesContainer = document.querySelector('#choices-container');
var timerContainer = document.querySelector('#timer')
var timerContainerText = document.getElementById('time');
var finalScoreContainer = document.querySelector('#final-score')
var initialInput = document.querySelector('#initials');


function populateQuestion(questions) {
    var currentQuestion = questions.title;
    var choices = questions.choices;

    choicesContainer.innerHTML = '';
    questionsTitle.textContent = currentQuestion;
    var choicesList = document.createElement('ul');
    for (let i = 0; i < choices.length; i++) {
        var choice = document.createElement('button');
        choice.textContent = choices[i];
        choicesList.appendChild(choice);
    }
    choicesContainer.appendChild(choicesList)
}

function endGame() {
    // When the game ends, it should display their score and give the user the ability to save their initials and their score

    clearInterval(timer);
    questionsContainer.setAttribute('class', 'hide');
    endScreenElement.setAttribute('class', 'visible');
    finalScore.textContent = score;

}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        populateQuestion(questions[currentQuestion]);
    } else {
        endGame();
    }
}

startButton.addEventListener('click', function() {
    startScreenElement.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible');

    // show the first question
    currentQuestion = 0;
    populateQuestion(questions[currentQuestion]);

    counter = 100;
    timer = setInterval(function() {
        counter--;
        timerContainerText.textContent = counter;
        if (counter <= 0) {
            // endGame()
            clearInterval(timer);
        }
    }, 1000);
});

function saveHighscore(initial) {
    // get the current highscores value from localstorage
    // json parse current highscores from localstorage, this will be an array of object
    // push initial + score to the array
    // order the array from highest score to lowest
    // json stringify then save back to localstorage
}

// Another click event listener for choices

choicesContainer.addEventListener('click', function(event){            
    var selectedAnswer = event.target.textContent;
    //    Check answer
    //        if correct, add 1 to score, call nextQuestion()
    if(selectedAnswer === questions[currentQuestion].answer){
        score += 1;
        nextQuestion();
    //        if wrong, remove 10 seconds from the interval, call nextQuestion()
    }else{
        counter -= 10;
        nextQuestion();
    }
})


// Click event listener to submit button
//    var initial = initialInput.value.trim()
//    saveHighscore(initial)
//    redirect to highscore page