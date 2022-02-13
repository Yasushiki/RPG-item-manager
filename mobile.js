if(screen.width <= 450) {
  window.onload = showItem();
}

function showItem() {
  var tableMagia = document.getElementsByClassName("magia")[0];
  var tableItem = document.getElementsByClassName("item")[0];

  tableMagia.style.visibility = "hidden";
  tableItem.style.visibility = "visible";

  tableItem.style.position = "absolute";

  var itemCaption = document.getElementsByClassName("itemCaption")[0];
  var magiaCaption = document.getElementsByClassName("magiaCaption")[0];

  itemCaption.classList.add("ativo");
  magiaCaption.classList.remove("ativo");
}

function showMagia() {
  var tableItem = document.getElementsByClassName("item")[0];
  var tableMagia = document.getElementsByClassName("magia")[0];

  tableMagia.style.visibility = "visible";
  tableItem.style.visibility = "hidden";

  tableMagia.style.position = "absolute";


  var itemCaption = document.getElementsByClassName("itemCaption")[0];
  var magiaCaption = document.getElementsByClassName("magiaCaption")[0];

  magiaCaption.classList.add("ativo");
  itemCaption.classList.remove("ativo");
}
