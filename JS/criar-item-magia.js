const item = {
  nome: "",
  quant: "",
  descr: ""
};
const magia = {
  nome: "",
  mp: "",
  descr: ""
};

function criarItensMagias(itens, magias) {
  // CRIANDO ITENS E MAGIAS //
  var divItemMagia = document.getElementsByClassName("item-magia");

  var divCaptions = document.createElement("div");
  divCaptions.className = "captions";

  var itemP = document.createElement("p");
  itemP.innerText = "Itens";
  itemP.className = "itemCaption";

  var magiaP = document.createElement("p");
  magiaP.innerText = "Magias";
  magiaP.className = "magiaCaption";

  if(screen.width <= 450) {
    itemP.setAttribute("onClick", "showItem()");
    magiaP.setAttribute("onClick", "showMagia()");
  }

  divCaptions.appendChild(itemP);
  if(magias.length !== 0) {
    divCaptions.appendChild(magiaP);
  }
  divItemMagia[0].appendChild(divCaptions);

  var divTables = document.createElement("div");
  divTables.className = "tables";

  // criando itens
  var itemTable = document.createElement("table");
  itemTable.className = "item";
  itemTable.border = "2px";

  var itemTr = document.createElement("tr");

  var itemThNome = document.createElement("th");
  itemThNome.innerText = "Nome";
  var itemThQuant = document.createElement("th");
  itemThQuant.innerText = "Quantidade";

  itemTr.appendChild(itemThNome);
  itemTr.appendChild(itemThQuant);
  itemTable.appendChild(itemTr);

  var num = 1;
  for(let i = 0; i < itens.length; i++) {

      var tr = document.createElement("tr");

      tr.setAttribute("onClick", `createModal("i", ${i}, '${itens[i].nome}', '${itens[i].descr}')`);

      if(num%2 != 0) {
        tr.className = "trImpar";
      } else {
        tr.className = "trPar";
      }

      var tdNome = document.createElement("td");
      tdNome.innerText = itens[i].nome;

      var tdQuant = document.createElement("td");
      tdQuant.innerText = itens[i].quant;

      tr.appendChild(tdNome);
      tr.appendChild(tdQuant);
      itemTable.appendChild(tr);

      num++;
  }
  divTables.appendChild(itemTable);

  // criando magias
  if(magias.length > 0) {
    var magiaTable = document.createElement("table");
    magiaTable.className = "magia";
    magiaTable.border = "2px"

    var magiaTr = document.createElement("tr");

    var magiaThNome = document.createElement("th");
    magiaThNome.innerText = "Nome";
    var magiaThMP = document.createElement("th");
    magiaThMP.innerText = "MP";

    magiaTr.appendChild(magiaThNome);
    magiaTr.appendChild(magiaThMP);
    magiaTable.appendChild(magiaTr);

    var num = 1;
    for(let i = 0; i < magias.length; i++) {

        var tr = document.createElement("tr");

        //tr.setAttribute("onClick", `createModal("m", ${i}, '${magias[i].nome}', '${magias[i].descr}')`);
        tr.setAttribute("onClick", `createModal("m", ${i}, '${magias[i].nome}', '${magias[i].descr}')`);

        if(num%2 != 0) {
          tr.className = "trImpar";
        } else {
          tr.className = "trPar";
        }

        var tdNome = document.createElement("td");
        tdNome.innerText = magias[i].nome;

        var tdQuant = document.createElement("td");
        tdQuant.innerText = magias[i].mp;

        tr.appendChild(tdNome);
        tr.appendChild(tdQuant);
        magiaTable.appendChild(tr);
        num++;
    }

    divTables.appendChild(magiaTable);
  }

  divItemMagia[0].appendChild(divTables)
}
