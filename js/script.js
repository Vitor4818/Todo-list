const buttonAddTarefa = document.getElementById("addTarefa")
const newTask = document.getElementById("new-task")
const todoList = document.getElementById("todo-list");
let listItems = []



function carregarTarefas() { //carrega as tarefas do local storage
    const tarefasSalvas = JSON.parse(localStorage.getItem('todoList'));
    if (tarefasSalvas) {
        listItems = tarefasSalvas;
        listItems.forEach(taskText => addTarefaNaTela(taskText));
    }
}

// salva as tarefas no LocalStorage
function salvarLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(listItems));
}



function addNovaTarefa(event){
    event.preventDefault() //Evitar da página ser atualizada ao clicar no botão

    if(newTask.value ==''){//Caso aperte o botão sem digitar nada
        window.alert("Digite algo primeiro!")
        return;
    }
    const taskText = newTask.value;
    listItems.push(newTask.value) //Adiciona o item no array
    console.log(listItems)//Exibe na tela uai    
    addTarefaNaTela(taskText); // Chama função para adicionar na tela
    salvarLocalStorage(); //Salvando as tarefas no LocalStorage
    newTask.value = ''; // Limpa os campos

}


function addTarefaNaTela(taskText) {
    const li = document.createElement('li'); // Cria um novo elemento <li> para a tarefa
    li.innerHTML = ` ${taskText}<button onclick="removerTarefa(this)">Excluir</button`;
    todoList.appendChild(li); // Adiciona o novo <li> à lista de tarefas no DOM
}


function removerTarefa(button) {
    const li = button.parentElement; // Seleciona o elemento  que contém o botão clicado
     const taskText = li.textContent.replace('Excluir', '').trim(); // Obtém o texto da tarefa, removendo o texto do botão

    listItems = listItems.filter(task => task !== taskText); // Remove a tarefa do array listItems
    console.log(listItems); // Exibe o array atualizado no console 
    li.remove(); // Remove o elemento
    salvarLocalStorage()

}

carregarTarefas();

buttonAddTarefa.addEventListener('click', addNovaTarefa)