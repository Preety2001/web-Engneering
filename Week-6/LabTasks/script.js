function addTask() {
    let taskInput = document.getElementById("inp");
    let taskList = document.getElementById("list");
    let taskText = taskInput.value;
  
    if (taskText.trim() !== "") {
      let li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
  