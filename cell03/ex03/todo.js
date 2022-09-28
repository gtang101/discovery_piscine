let listContainer = document.getElementById("ft_list")

function newElement(){
    let todoText = prompt("Enter your task: ");
    let newTask = listContainer.createElement("div");
    let task = document.createTextNode(todoText);
    newTask.appendChild(task);
}