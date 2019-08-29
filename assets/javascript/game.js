//Declare variables
var randomNum;
var crystal1Num;
var crystal2Num;
var crystal3Num;
var crystal4Num;
var totalScore = 0;



// Clear the result
$(document).ready(function() {

    randomNumGen();
    crystalNums();
    console.log(crystal1Num);
    console.log(crystal2Num);
    console.log(crystal3Num);
    console.log(crystal4Num);

    console.log(randomNum);
    document.getElementById("randomNumBox").innerHTML = randomNum;

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

});

function numChecker() {
    if (totalScore == randomNum) {
        $('#winModal').modal('show');
        console.log("You win!");

    } else if (totalScore >= randomNum) {
        console.log("You lose");
    }

}


//Crystal 1 Button Click
$("#crystal1").on("click", function() {
    totalScore = totalScore + crystal1Num;
    console.log("total score is " + totalScore);
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Crystal 2 Button Click
$("#crystal2").on("click", function() {
    totalScore = totalScore + crystal2Num;
    console.log("total score is " + totalScore);
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Crystal 3 Button Click
$("#crystal3").on("click", function() {
    totalScore = totalScore + crystal3Num;
    console.log("total score is " + totalScore);
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});

//Crystal 4 Button Click
$("#crystal4").on("click", function() {
    totalScore = totalScore + crystal4Num;
    console.log("total score is " + totalScore);
    document.getElementById("totalNum").innerHTML = totalScore;
    numChecker();

});