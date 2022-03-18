// Assignment code here

var questions = [{
    question: "1. Commonly used data types DO NOT include?",
    1. "strings",
    2. "booleans",
    3. "alerts",
    4. "numbers"
    correctAnswer "3"},
{
    question: "2. The condition in an if/else statement is enclosed with ________?",
    1. "quotes",
    2. "curly brackets",
    3. "parenthesis",
    4. "square brackets"
    correctAnswer: "3"},
{
    question: "3. Arrays in JavaScript can be used to store_________?",
    1. "numbers and strings",
    2. "other arrays",
    3. "booleans",
    4. "all of the above"
    correctAnswer: "4"},
{
    question: "4. String values must be enclosed within _________?",
    1. "commas",
    2. "curly brackets",
    3. "quotes",
    4. "parenthesis",
    correctAnswer: "1"},
{            
    question: "5. A very useful tool used during development and debugging for printing content to the debugger is?",
    1. "JavaScript",
    2. "terminal/bash",
    3. "for loops",
    4. "console.log",
    correctAnswer: "4"},
];





// countdown timer function here

function startTimer() {
    var counter = 60;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert
        }
    }
