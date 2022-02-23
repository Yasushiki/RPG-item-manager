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

var itens = [seloAben, seloAmal, capa, colar];
var magias = [];

criarItensMagias(itens, magias);
