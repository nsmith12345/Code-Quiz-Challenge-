// Assignment code here






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
}