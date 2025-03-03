function addTask() {
    let task = document.getElementById('task').value;
    let deadline = document.getElementById('deadline').value;
    if (task && deadline) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ task, deadline });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert('Task Added!');
    } else {
        alert('Please enter task and deadline.');
    }
}

function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item, index) => {
        let li = document.createElement('li');
        li.innerHTML = `${item.task} (Due: ${item.deadline}) <button onclick="editTask(${index})">Edit</button> <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let newTask = prompt('Edit Task:', tasks[index].task);
    let newDeadline = prompt('Edit Deadline:', tasks[index].deadline);
    if (newTask && newDeadline) {
        tasks[index] = { task: newTask, deadline: newDeadline };
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

document.addEventListener('DOMContentLoaded', displayTasks);
