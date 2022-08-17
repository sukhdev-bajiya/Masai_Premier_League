// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit", addMatch);

var fixMatch = JSON.parse(localStorage.getItem("schedule")) || [];

function addMatch(event) {
  event.preventDefault();
  var matchNumber = document.getElementById("matchNum");
  var teamA = document.getElementById("teamA");
  var teamB = document.getElementById("teamB");
  var date = document.getElementById("date");
  var venue = document.getElementById("venue");

  var matchObj = {
    number:matchNumber.value,
    teamA:teamA.value,
    teamB:teamB.value,
    date:date.value,
    venue:venue.value,
    fav:0
  };
  fixMatch.push(matchObj);

  localStorage.setItem("schedule", JSON.stringify(fixMatch));
}

