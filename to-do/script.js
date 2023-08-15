const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        const editBtn = taskItem.querySelector('.edit-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');
        const taskTextElement = taskItem.querySelector('.task-text');

        editBtn.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskTextElement.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskTextElement.textContent = newTaskText.trim();
            }
        });

        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
}

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
