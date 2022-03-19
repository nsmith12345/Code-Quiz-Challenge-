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
    "numbers and stringsA": numbers and strings,
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
    "for loopsC": for loops,
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





/***************************** START EXECUTION ON PAGE LOAD *********************************/
console.log("Javascript loaded");
window.addEventListener("load", welcome(), false);