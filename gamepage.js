// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess
var guess;
var x = document.getElementById("guessField").value;
function submit(){
// function for number guessed by user     
if (x == y) {
    alert("CONGRATULATIONS!!! " + playername + " YOU GUESSED IT RIGHT IN + guess + GUESS ");
    guess = 1;
} else if (x > y) {
    /* if guessed number is greater than actual number*/
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
} else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
}
function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}