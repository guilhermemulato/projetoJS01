let textElement = "";

// Pegar o input

let inp = document.querySelector("input[name=tarefa]");

// Pegar o Botao

let btn = document.querySelector("#botao");

// Pegar lista
let list = document.querySelector("#lista");

// Funcao do Botao
btn.onclick = function () {
  // Criar elemento li

  let liElement = document.createElement("li");
  liElement.setAttribute("class", "list-group-item list-group-item-action");

  if (inp.value !== "") {
    textElement = document.createTextNode(inp.value);
  } else {
    alert("Tarefa precisa ser preenchida...");
    throw "error";
  }

  liElement.appendChild(textElement);

  list.appendChild(liElement);

  inp.value = "";
};
