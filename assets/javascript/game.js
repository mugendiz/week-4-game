// Variables
var selectedNumber = targetScore;
var currentScore = 0;
var crystalValue = scoreC,
  value;

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
console.log(scoreR);
$("#targetScore").text(scoreR);


// Random value for each crystal that gets added to current score

crystal1.value = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal1.value);

crystal2.value = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal2.value);

crystal3.value = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal3.value);

crystal4.value = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crystal4.value);

var crystals = [crystal1, crystal2, crystal3, crystal4];

console.log(crystals);
// Current Score updated upon click of crystal

var scoreC = crystals,
  value;
console.log(scoreC);

// On load current score, wins, loses
$("#currentScore").html(0);
$("#wins").html(0);
$("#loses").html(0);



// tanzanite

$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "tanzanite") {
    // $("#currentScore" + crystal4.Value);
    scoreC.value += crystal4.value;
    // $("#currentScore"+= crystal4.value)
    // change currentScore to include crystalvalue
    $("#currentScore").html(crystal4.value + crystal4.value);
  }
  // expand this to all crystals and adds

})

// ruby

$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "ruby") {
    scoreC.value += crystal3.value;
    $("#currentScore").html(crystal3.value + crystal3.value);
  }
})

// pearl

$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "pearl") {
    scoreC.value += crystal2.value;
    $("#currentScore").html(crystal2.value + crystal2.value);
  }
})


// diammond
$(".crystal").on("click", function() {
  crystalType = $(this).attr("id");
  if (crystalType === "diamond") {
    scoreC.value += crystal1.value;
    $("#currentScore").html(crystal1.value + crystal1.value);
  }
})


// if else statement


// if currentScore === targetScore {
//   $("#wins").text(++)
// } else if {
//   currentScore > targetScore {
//  $("#loses").text(++)

// }
// } else if {
//   wins === 5 {
//     function(reset)
//    }
