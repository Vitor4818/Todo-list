const buttonAddTarefa = document.getElementById("addTarefa")
const newTask = document.getElementById("new-task")
const todoList = document.getElementById("todo-list");
let listItems = []



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
    newTask.value = ''; // Limpa os campos

}


function addTarefaNaTela(taskText) {
    const li = document.createElement('li'); // Cria um novo elemento <li> para a tarefa
    li.innerHTML = ` ${taskText}<button onclick="removeTask(this)">Excluir</button`;
    todoList.appendChild(li); // Adiciona o novo <li> à lista de tarefas no DOM
}




buttonAddTarefa.addEventListener('click', addNovaTarefa)