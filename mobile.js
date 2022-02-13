if(screen.width <= 450) {
  window.onload = showItem();
}

function showItem() {
  var tableMagia = document.getElementsByClassName("magia")[0];
  var tableItem = document.getElementsByClassName("item")[0];

  tableMagia.style.visibility = "hidden";
  tableItem.style.visibility = "visible";

  tableItem.style.position = "absolute";
}

function showMagia() {
  var tableItem = document.getElementsByClassName("item")[0];
  var tableMagia = document.getElementsByClassName("magia")[0];


    tableMagia.style.visibility = "visible";
    tableItem.style.visibility = "hidden";

  tableMagia.style.position = "absolute";
}
