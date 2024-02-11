const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => {
            deleteTask(index);
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
        taskInput.value = "";
    } else {
        alert("Tarea inválida.");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

renderTasks();