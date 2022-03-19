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

