let textElement = "";

// Pegar o input

let inp = document.querySelector("input[name=tarefa]");

// Pegar o Botao

let btn = document.querySelector("#botao");

// Pegar lista
let list = document.querySelector("#lista");

// Pegar Card
let card = document.querySelector(".card");

let tarefas = ["Jogar GTA5", "Estudar Python", "Ficar Definido"];

function renderizarTarefas() {
  // Limpar lista
  list.innerHTML = "";

  for (tarefa of tarefas) {
    // Criar elemente li
    let liElement = document.createElement("li");

    // Setar atributos a class
    liElement.setAttribute("class", "list-group-item list-group-item-action");

    liElement.onclick = function () {
      removerTarefa(this);
    };
    //criar elemento de texto
    textElement = document.createTextNode(tarefa);

    //adicionar texto criado ao elemente criado li
    liElement.appendChild(textElement);

    //adiconar elemento criado li a lista
    list.appendChild(liElement);
  }
}

renderizarTarefas();

// Funcao do Botao
btn.onclick = function () {
  let textTarefa = inp.value;

  if (inp.value !== "") {
    // Adicionat a tarefa no array
    tarefas.push(textTarefa);
    // Limpar input
    inp.value = "";

    renderizarTarefas();
    removerSpans();
  } else {
    removerSpans();

    card = document.querySelector(".card");

    let span = document.createElement("span");
    span.setAttribute("class", "alert alert-warning");

    let msg = document.createTextNode("Você precisa informar a tarefa!");
    span.appendChild(msg);

    card.appendChild(span);
  }
};

function removerSpans() {
  let spans = document.querySelectorAll("span");

  card = document.querySelector(".card");

  for (s of spans) {
    card.removeChild(s);
  }
  //   for (let i = 0; i < spans.length; i++) {
  //     card.removeChild(spans[i]);
  //   }
}

function removerTarefa(tarefa) {
  // Remove a tarefa do array
  tarefas.splice(tarefas.indexOf(tarefa.textContent), 1);

  renderizarTarefas();
}
