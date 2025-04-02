// Add Task Function
function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const dateTimeInput = document.getElementById("dateTimeInput").value;
    const priorityInput = document.getElementById("priorityInput").value;

    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task-details ${priorityInput.toLowerCase()}">
            <span>${taskInput} - <strong>${formatDate(dateTimeInput)}</strong> - <em>${priorityInput} Priority</em></span>
            <div class="task-buttons">
                <button onclick="editTask(this)">✏️</button>
                <button onclick="completeTask(this)">✔️</button>
                <button class="delete-btn" onclick="deleteTask(this)">❌</button>
            </div>
        </div>
    `;

    taskList.appendChild(li);
    resetInputs();
}

// Mark Task as Complete
function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

// Edit Task
function editTask(button) {
    const task = button.parentElement.parentElement;
    const taskText = task.querySelector("span").innerText.split(" - ")[0];
    document.getElementById("taskInput").value = taskText;
    task.remove();
}

// Delete Task
function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

// Format Date and Time
function formatDate(dateTime) {
    if (!dateTime) return "No due date";
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
}

// Reset Inputs
function resetInputs() {
    document.getElementById("taskInput").value = "";
    document.getElementById("dateTimeInput").value = "";
    document.getElementById("priorityInput").value = "Medium";
}
