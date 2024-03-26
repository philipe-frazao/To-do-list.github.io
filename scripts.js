const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + 
        `
            <li class="task ${item.concluida && "done"}">
            <img  src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefas(${index})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
            </li>
        `
    })

    listCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}


function concluirTarefas (index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()
}


function deletarItem(index){
    minhaListaDeItens.splice(index, 1)

    
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)
