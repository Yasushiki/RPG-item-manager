const personagem = {
  nome: "",
  rpg: ""
};

var keroshane = Object.create(personagem);
keroshane.nome = "Keroshane";
keroshane.rpg = "Jidaiokure no Yume";

var astolfo = Object.create(personagem);
astolfo.nome = "Taiga Astolfo";
astolfo.rpg = "Mukashi no Koto Ima no Koto";

var naruto = Object.create(personagem);
naruto.nome = "Muleke triste depressivo";

var cao = Object.create(personagem);
cao.nome = "Fodasse, tô de férias";

var personagens = [keroshane, astolfo, naruto, cao];

for(let i = 0; i < personagens.length; i++) {

  var anchor = document.createElement("a");
  anchor.className = "linkDiv";
  anchor.href = `chara${i}/index.html`;

  var card = document.createElement("div");
  card.className = "cardPersonagem";

  var divImg = document.createElement("div");
  divImg.className = "divImg";

  var img = document.createElement("img");
  img.className = "imgPersonagem";
  img.src = `chara${i}/img1.png`;

  divImg.appendChild(img);

  var nome = document.createElement("span");
  nome.className = "nomePersonagem";
  nome.innerText = personagens[i].nome;

  divImg.appendChild(nome);
  card.appendChild(divImg);
  anchor.appendChild(card);

  var div = document.getElementsByClassName("personagens");
  div[0].appendChild(anchor);

}
