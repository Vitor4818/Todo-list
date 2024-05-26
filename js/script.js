const buttonAddTarefa = document.getElementById("addTarefa")
const newTask = document.getElementById("new-task")
let listItems = []



function addNovaTarefa(){
    listItems.push(newTask.value)
    console.log(listItems)
}


buttonAddTarefa.addEventListener('click', addNovaTarefa)

