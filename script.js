document.addEventListener("DOMContentLoaded", function(){
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //Function to Add Task to the list when the Add button is Clicked
  function addTask() {
    const taskText = taskInput.value.trim();

    if(taskInput.value = ""){
      alert("Enter a task.");
    }

    const list = document.createElement("li");
    const removeButton = document.createElement("button");


    list.textContent = taskText
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    list.appendChild(removeButton);
    taskList.appendChild(list)

    //Event Listener for the Remove button
    removeButton.addEventListener("click", function(){
      this.parentElement.remove();
    })
  }

  //Event Listener for the Add Button
  addButton.addEventListener("click", addTask);

  //Adding Enter as Event to the Task Input Box
  taskInput.addEventListener("keypress", function(event){
    if(event.key === 'Enter'){
      addTask();
    }
  })

})

//Adding the AddTask function to the DOMContentLoaded
document.addEventListener("DOMContentLoaded", addTask);