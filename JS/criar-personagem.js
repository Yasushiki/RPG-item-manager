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

var personagens = [keroshane];

for(let i = 0; i < personagens.length; i++) {
  var card = document.createElement("div");
  card.className = "cardPersonagem";

  var img = document.createElement("img");
  img.className = "imgPersonagem";
  img.src = `chara${i+1}/img1.` + ;
}

//08341188155
