function createModal(tipo, index, nome, descr) {

  var modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";
  modalContainer.id = `${tipo}div${index}`;
  modalContainer.setAttribute("onClick", "this.remove();");

  var modal = document.createElement("div");
  modal.className = "moda";

  var titulo = document.createElement("h3");
  titulo.innerText = nome;
  titulo.className = "modal-titulo"

  var texto = document.createElement("p");
  texto.innerText = descr;
  texto.className = "modal-texto";

  modal.appendChild(titulo);
  modal.appendChild(texto);

  modalContainer.appendChild(modal);

  var html = document.getElementsByTagName("body");
  html[0].prepend(modalContainer);
};
