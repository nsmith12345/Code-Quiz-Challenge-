// Assignment code here

// ******************* Variables *****************************//
// DOM Variables
var topNavContainer = document.getElementById("pageTopNav"); // Top Navigation - includes time, and view scores
var timeTracker = document.getElementById("time"); //Store time
var viewScoresLink = document.getElementById("viewScores"); //Shows the "view scores" at the top of each page
var startPageContainer = gocument.getElementById
var questionPageContainer = document.getElementById("questionPage"); //Question Page Container
var questionTitleContainer = document.getElementById("QuestionTitle"); //Stores the Question Title
var resultsPageContainer = document.getElementById("results"); //Results Page
var highScoresPageContainer = document.getElementById("highScores"); //High score page
var showHighScores = document.getElementById("highestScore"); //Filed for the highest scores
var isCorrectContainer = document.getElementById("iscorrectField"); //Shows Wrong or Correct
var usersScore = document.getElementById("yourScore"); //Displays the users final score at the end
var aButton = document.getElementById("a"); //A Button Response
var bButton = document.getElementById("b"); //B Button Response
var cButton = document.getElementById("c"); //C Button Response
var dButton = document.getElementById("d"); //D Button Response
var userInitialInput = document.getElementById("userInits");

//Quiz Global Variables
var questonNumber = 0; //Current Question
var timeRemaining = 70; //How much time is remaining - also user score
var score = 0; //Takes the value of time remaining at completion and stores it
var timing = 0; //Interval timer, initially set to 0
var userName = ""; //Stores the user name or initials

//Quiz Questions Array
var questions = [
    {"Question": "Commonly used data types DO NOT include?",
    "stringsA": strings,
    "booleansB": booleans,
    "alertsC": alerts,
    "numbersD": numbers,
    "correct": "c"
    },
    {"Question": "The condition in an if/else statement is enclosed with ________?"
    "quotesA": quotes,
    "curly bracketsB": curly brackets,
    "parenthesisC": parenthesis,
    "square bracketsD": square brackets,
    "correct": "c"
    },
    {"Question": "Arrays in JavaScript can be used to store_________?"
    "numbersandstringsA": numbers and strings,
    "other arraysB": other arrays,
    "booleansC": booleans,
    "all of the above D": all of the above,
    "correct": "d" 
    },
    {"Question": "String values must be enclosed within _________?",
    "commasA": commas,
    "curly bracketsB": curly brackets,
    "quotesC": quotes,
    "parenthesisD": parenthesis,
    "correct": "a"
    },
    {"Question": "A very useful tool used during development and debugging for printing content to the debugger is?"
    "JavaScriptA": JavaScript,
    "terminal/bashB": terminal/bash,
    "for loopsC": forloops,
    "console.logD": console.log,
    "correct": "d"
    },
];              
    
/************************** MAIN FUNCTIONS *************************************************/
//Welcome Function - Displays Welcome Page
function welcome () {
    timeTracker.style.display ="block";

    questionNumber = 0; //Resets question number to 0
    timeRemaining = 70; //Resets time remaining to 70
    startPageContainer.style.display="block";
    console.log("Welcome Function");
    questionPageContainer.style.display="none";
    resultsPageContainer.style.display="none";
    highScoresPageContainer.style.display="none";
    isCorrectContainer.style.display="none";
}

//Display Question FUnction - Displays the Question Page for Current Question Number
function displayQuestion() {
    console.log("display Question");
    if(questionNumber == 0) {counDown();}
    questionNumber +=1;
    questionPageContainer.style.display="block";
    startPageContainer.style.display="none";
    if ((questionNumber <= questions.length) && (questionNumber !=0)) { //Checks to see if the question number is between 1 and the number of questions
        
    console.log ("Asking a question:");
    questionTitleContainer.textContent = questions[questionNumber -1].Question; //Displays the title of the question
    aButton.textContent = questions[questionNumber - 1].answerA; // Sets Button A to the first choice
    bButton.textContent = questions[questionNumber - 1].answerB; // Sets Button B to the first choice    
    cButton.textContent = questions[questionNumber - 1].answerC; // Sets Button C to the first choice     
    dButton.textContent = questions[questionNumber - 1].answerD; // Sets Button D to the first choice
    } else { //Ends the quiz if the last question was reached
    console.log("Quiz is over");
    endQuiz();
    }
    
}

//Check Answer Function - Checks the Answer
function checkAnswer(returnValue) {
    isCorrectContainer.style.display = "block"; //Makes the container at the bottom is visible
    console.log("Checking Answer");
    if (returnValue == questions[questionNumber - 1].correct) { //takes the return value (from the button pressed) and checks to see if it is the correct answer
    console.log("Correct Answer");
    displayQuestion();
    isCorrectContainer.textContent = "Correct!";

    } else {
        timeRemaining -=10;
        displayQuestion();
        isCorrectContainer.textContent = "Wrong!";
    }
    console.log(timeRemaining);
    }

// High Score Function - Displays the High Score Page
function highScore() {

    resultsPageContainer.style.display = "none";
    highScoresPageContainer.style.display = "block";
    isCorrectContainer.style.display = "none";
    userName = userInitialInput.ariaValueMax; //Takes the initials form the textfield on the High Score page
    console.log(userName);
    console.log("Score: " + score);

}    

//Results - Determines the Results - only if time is out or last question reached
function endQuiz() {
    clearInterval(timing); //Stops the timer
    score = timeRemaining; //Sets the score to the current time remaining
    timeTracker.style.display = "none"; //Hides the time countdown
    questionPageContainer.style.display="none"; //Hides the question page
    resultsPageContainer.style.display="block"; //Shows the results page
    usersScore.textContent = "Your final score is: " + score; //Shows the user their score 
}

//Clear High Score - Clears the high scores list
function clearHigh() {
//* This will hold how to clear the high scores list */

}

//Controls the countdown
function countDown() {
    
    console.log("Timer Started");
    timing = setInterval(function() {

        timeRemainging--;
        timeTracker.textContent = "Time left: " + timeRemaining; //Displays the timer as each tick cycles

        if(timeRemaining === 0) { // if time remaining is 0 then clear the interval and go to End
        clearInterval(timing);
        endQuiz();
        }
    }, 1000); //1000 is the interval for a second
}

/***************************** START EXECUTION ON PAGE LOAD *********************************/
console.log("Javascript loaded");
window.addEventListener("load", welcome(), false);