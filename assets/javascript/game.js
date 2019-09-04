//Declare variables
var randomNum;
var crystal1Num;
var crystal2Num;
var crystal3Num;
var crystal4Num;
var totalScore = 0;
var wins = 0;
var losses = 0;



// Clear the result
$(document).ready(function() {

    randomNumGen();
    crystalNums();
    $("#reset").hide();

    document.getElementById("randomNumBox").innerHTML = randomNum;

});

//Random number generator for user to guess
function randomNumGen() {
    randomNum = Math.floor((Math.random() * 102) + 19);

}

//Generate random numbers for crystals
function crystalNums() {
    crystal1Num = Math.floor((Math.random() * 12) + 1);
    crystal2Num = Math.floor((Math.random() * 12) + 1);
    crystal3Num = Math.floor((Math.random() * 12) + 1);
    crystal4Num = Math.floor((Math.random() * 12) + 1);

}
//Check to see if you win or lose
function numChecker() {
    if (totalScore == randomNum) {
        $('.crystal-images').attr("disabled", true);
        $('#instruction').hide();
        $('#message').show();
        $("#reset").show();
        $('#message').html("<h2>You Win!</h2></br><p>Click button to play again</p>")
        wins++;
        $("#win").html("Wins: " + wins);
        console.log("You win!");


    } else if (totalScore >= randomNum) {
        $('.crystal-images').attr("disabled", true);
        $('#instruction').hide();
        $('#message').show();
        $("#reset").show();
        $('#message').html("<h2>You Lose!</h2></br><p>Click button to play again</p>");
        losses++;
        $("#lose").html("Losses: " + losses);

        console.log("You lose");
    }

}

//Crystal 1 Button Click
$("#crystal1").on("click", function() {
    totalScore = totalScore + crystal1Num;
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Crystal 2 Button Click
$("#crystal2").on("click", function() {
    totalScore = totalScore + crystal2Num;
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Crystal 3 Button Click
$("#crystal3").on("click", function() {
    totalScore = totalScore + crystal3Num;
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Crystal 4 Button Click
$("#crystal4").on("click", function() {
    totalScore = totalScore + crystal4Num;
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Reset Button
$("#reset").on("click", function() {
    $("#reset").hide();
    $('#message').hide();
    $('#instruction').show();
    randomNum = 0;
    crystal1Num = 0;
    crystal2Num = 0;
    crystal3Num = 0;
    crystal4Num = 0;
    totalScore = 0;
    randomNumGen();
    crystalNums();

    document.getElementById("randomNumBox").innerHTML = randomNum;
    document.getElementById("totalNum").innerHTML = totalScore;
    $('.crystal-images').attr("disabled", false);

});