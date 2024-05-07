const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listCompleta = document.querySelector(".list-task");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  if (input.value.trim() !== "") {
    minhaListaDeItens.push({
      tarefa: input.value,
      concluida: false
    });

    input.value = "";

    mostrarTarefas();
  } else {
    alert("Por favor, insira uma tarefa antes de adicionar!");
  }
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, index) => {
    novaLi =
      novaLi +
      `
            <li class="task ${item.concluida && "done"}">
            <i class="check fa-solid fa-check" onclick="concluirTarefas(${index})"></i>
           
            <p>${item.tarefa}</p>
            
            <i class="trash fa-solid fa-trash" onclick="deletarItem(${index})"></i>
        
            </li>
        `;
  });

  listCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
}

function concluirTarefas(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;

  mostrarTarefas();
}

function deletarItem(index) {
  minhaListaDeItens.splice(index, 1);

  mostrarTarefas();
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem("lista");

  if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage);
  }

  mostrarTarefas();
}

recarregarTarefas();

button.addEventListener("click", adicionarNovaTarefa);