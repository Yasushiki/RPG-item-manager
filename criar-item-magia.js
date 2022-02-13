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

// Itens
var seloAben = Object.create(item);
seloAben.nome = "Selos abençoados (vazios)";
seloAben.quant = "1271";
seloAben.descr = "Selos abençoados vazios. Dão 10 de MP por magia gasta";

var seloAmal = Object.create(item);
seloAmal.nome = "Selos amaldiçoados (vazios)";
seloAmal.quant = "278";
seloAmal.descr = "Selos amaldiçoados vazios. Dão 10 de MP por magia gasta";

var capa = Object.create(item);
capa.nome = "Capa preta de cura";
capa.quant = "1";
capa.descr = "A capa de cura te cura toda vez que você se cobre por completo, aumentando o hp em 1d6 a cada 3 turnos, se não é só uma capa comum.";

var colar = Object.create(item);
colar.nome = "Colar de mana";
colar.quant = "1";
colar.descr = "-5 mp gasto em magia normal, -10 mp gasto em magia sagrada.";

// Magias
var katsumori = Object.create(magia);
katsumori.nome = "Katsumori";
katsumori.mp = "10";
katsumori.descr = `- Ao ter em posse um papel abençoado com o desenho de uma flecha, é necessário ter em mente um objetivo claro para se usar este selo. Usando esta magia, você consegue garantir em até 1d6 de rodadas o quanto se terá de sucesso. Por exemplo: Se esta magia for usada em batalha, e tirar o número 4, nas próximas 4 rodadas, todo e qualquer dado que você queira rodar no seu turno, automaticamente vão dar certo. Se você resolve atacar alguém, o dado de ataque automaticamente vai dar certo.\\nMateriais: Um selo abençoado, desenhado com uma flecha pelo usuário.\\nTempo: 1 turno de conjuração\\nRestrições: Só pode ser usado uma vez a cada 5 minutos.`;

var edadilibomi = Object.create(magia);
edadilibomi.nome = "Edadilibomi";
edadilibomi.mp = "40";
edadilibomi.descr = `- Rode 1d6. O número que sair, vai ser o período em que a criatura que tocar ficará paralisada, sem poder mover um músculo. Magias ainda podem ser conjuradas da criatura se ela puder o fazer sem se mover.\\nMateriais: Um selo abençoado, com o desenho de um círculo.\\nTempo: 1 turno de conjuração.\\nRestrições: É necessário estar à, no mínimo, 10 metros de distância do oponente, caso contrário, não funcionará. Só pode ser usada uma vez a cada 20 rodadas.`;

var gakugyou = Object.create(magia);
gakugyou.nome = "Gakugyou";
gakugyou.mp = "10";
gakugyou.descr = `- Com essa magia, você precisa encarar o oponente em questão por três segundos, e então, saberá exatamente o ponto fraco dele.\\nMateriais: Um selo abençoado, com o desenho de um olho nele.\\nTempo: 1 turno de conjuração.\\nRestrições: Só pode ser usado uma vez a cada 5 minutos. Um monstro de cada vez.`;


var itens = [seloAben, seloAmal, capa, colar];
var magias = [katsumori, edadilibomi, gakugyou];

// CRIANDO ITENS E MAGIAS //
var divItemMagia = document.getElementsByClassName("item-magia");

var divCaptions = document.createElement("div");
divCaptions.className = "captions";

var itemP = document.createElement("p");
itemP.innerText = "Itens";

var magiaP = document.createElement("p");
magiaP.innerText = "Magias";

if(screen.width <= 450) {
  itemP.setAttribute("onClick", "showItem()");
  magiaP.setAttribute("onClick", "showMagia()");
}

divCaptions.appendChild(itemP);
divCaptions.appendChild(magiaP);
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
