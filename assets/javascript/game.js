// Variables
var selectedNumber = targetScore;
var currentScore = 0;
var crystalValue = scoreC,
  value;
var winCount = 0;
var lossCount = 0;

var crystal1 = {
  type: "diamond",
  value: {}
}
var crystal2 = {
  type: "pearl",
  value: {}
}
var crystal3 = {
  type: "ruby",
  value: {}
}
var crystal4 = {
  type: "tanzanite",
  value: {}
}


// Random number for target score

var scoreR = Math.floor(Math.random() * (120 - 19) + 1);
$("#targetScore").text(scoreR);


// Random value for each crystal that gets added to current score

crystal1.value = Math.floor(Math.random() * (12 - 1) + 1);

crystal2.value = Math.floor(Math.random() * (12 - 1) + 1);

crystal3.value = Math.floor(Math.random() * (12 - 1) + 1);

crystal4.value = Math.floor(Math.random() * (12 - 1) + 1);

var crystals = [crystal1, crystal2, crystal3, crystal4];


// Current Score updated upon click of crystal

var scoreC = crystals,
  value;

// On load current score, wins, loses
$("#currentScore").html(0);
$("#wins").html(0);
$("#loses").html(0);


// tanzanite

$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "tanzanite") {
    // change currentScore to include crystalvalue
    //-----------
    currentScore = currentScore + crystal4.value;
    $("#currentScore").html(currentScore);
    //-----------
    // $("#currentScore").html(crystal4.value + crystal4.value);

  }
})

// ruby

$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "ruby") {
    currentScore = currentScore + crystal3.value;
    $("#currentScore").html(currentScore);

  }
})

// pearl

$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "pearl") {
    currentScore = currentScore + crystal2.value;
    $("#currentScore").html(currentScore);

  }
})


// diammond
$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "diamond") {
    currentScore = currentScore + crystal4.value;
    $("#currentScore").html(currentScore);

  }
});



// if else statement
$(".crystal").on("click", function() {

  if (currentScore === scoreR) {
    $("#wins").html(winCount ++);
  } else if (currentScore > scoreR); {
    $("#loses").html(lossCount ++);
  }
});

$(".crystal").on("click", function() {
  if (currentScore === scoreR) {
    $("#announcement").html("You Won!! Click on a crystal to play again");
    $("#announcement").html("You Lose, Click a Crystal to try again")
  }
});






// if {
//   wins === 5 {
//     function(reset)
//   };

// <-- Winning Code -->
// ...................................................
// currentScore = currentScore + crystal4.value;
// $("#currentScore").html(currentScore);
// ...................................................
