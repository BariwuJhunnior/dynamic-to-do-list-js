
document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  let tasks = [];

  // Load tasks from Local Storage and populate the list
  function loadTasks() {
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(taskText => addTask(taskText, false));
  }

  // Save current tasks array to Local Storage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a task to the DOM and optionally to Local Storage
  function addTask(taskText, save = true) {
    if (typeof taskText !== 'string') {
      taskText = taskInput.value.trim();
    }
    if (!taskText) {
      alert("Enter a task.");
      return;
    }

    const list = document.createElement("li");
    const removeButton = document.createElement("button");
    list.textContent = taskText;
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    list.appendChild(removeButton);
    taskList.appendChild(list);

    // Add to tasks array and save if needed
    if (save) {
      tasks.push(taskText);
      saveTasks();
    }

    // Remove button event
    removeButton.addEventListener("click", function() {
      // Remove from DOM
      list.remove();
      // Remove from tasks array and update Local Storage
      tasks = tasks.filter(t => t !== taskText);
      saveTasks();
    });
  }

  // Add button event
  addButton.addEventListener("click", function() {
    addTask();
    taskInput.value = "";
  });

  // Enter key event
  taskInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
      addTask();
      taskInput.value = "";
    }
  });

  // Initial load
  loadTasks();
});