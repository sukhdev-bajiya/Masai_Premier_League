// write js code here corresponding to favourites.html

var favouriteList = JSON.parse(localStorage.getItem("favourites"));

printMatchList(favouriteList);

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
    <td style="color:red; cursor:pointer" onclick="removeToFavourite(${index})">Delete</td>
    `;

    tr.innerHTML = row;
    document.querySelector("tbody").append(tr);
  });
}

function removeToFavourite(i) {
  favouriteList.splice(i, 1);
  localStorage.setItem("favourites", JSON.stringify(favouriteList));
  printMatchList(favouriteList);
}
