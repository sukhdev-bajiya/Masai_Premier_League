// write js code here corresponding to matches.html

var fixMatch = JSON.parse(localStorage.getItem("schedule"));

printMatchList(fixMatch);

function printMatchList(fixMatch) {
  document.querySelector("tbody").innerText = "";
  fixMatch.map(function (ele, index) {
    var tr = document.createElement("tr");
    var row = `
    <td>${ele.number}</td>
    <td>${ele.teamA}</td>
    <td>${ele.teamB}</td>
    <td>${ele.date}</td>
    <td>${ele.venue}</td>
    <td style="color:green; cursor:pointer" onclick="addToFavourite(${index})">Favourite</td>
    `;

    tr.innerHTML = row;
    document.querySelector("tbody").append(tr);
  });
}

var favouriteList = JSON.parse(localStorage.getItem("favourites")) || [];

function addToFavourite(i) {
  if (fixMatch[i].fav !== 1) {
    fixMatch[i].fav = 1;
    favouriteList.push(fixMatch[i]);
    localStorage.setItem("favourites", JSON.stringify(favouriteList));
  }
}
document.getElementById("filterVenue").setAttribute("onchange", "filterMatch()")

function filterMatch() {
  var city = document.getElementById("filterVenue").value;
//   console.log(city);
  var newMacthList = fixMatch.filter(function (ele) {
    if (city == "none") return true;
    return ele.venue == city;
  });
  printMatchList(newMacthList);
}
