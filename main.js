// Seleciona os elementos
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task_name');
const addTaskButton = document.querySelector('.add-task-button');

// Função para adicionar uma tarefa
function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        const newTask = document.createElement('li');
        newTask.classList.add('list-item');
        newTask.innerHTML = `${taskName} <button class="delete-task-button">X</button>`;
        taskList.appendChild(newTask);
        taskInput.value = '';
        newTask.querySelector('.delete-task-button').addEventListener('click', removeTask);
    }
}

// Função para remover uma tarefa
function removeTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// Adiciona tarefa ao clicar no botão
addTaskButton.addEventListener('click', addTask);

// Adiciona tarefa ao pressionar Enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Adiciona o evento de remoção a cada botão de deletar existente
document.querySelectorAll('.delete-task-button').forEach(button => {
    button.addEventListener('click', removeTask);
});
