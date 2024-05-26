const buttonAddTarefa = document.getElementById("addTarefa")
const newTask = document.getElementById("new-task")
let listItems = []



function addNovaTarefa(event){
    event.preventDefault() //Evitar da página ser atualizada ao clicar no botão

    if(newTask.value ==''){//Caso aperte o botão sem digitar nada
        window.alert("Digite algo primeiro!")
        return;
    }
    listItems.push(newTask.value) //Adiciona o item no array
    console.log(listItems)//Exibe na tela uai
    newTask.value = ''; // Limpa os campos
}

buttonAddTarefa.addEventListener('click', addNovaTarefa)

