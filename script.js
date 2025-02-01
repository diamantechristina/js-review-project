// ToDo CRUD Management

//Array to store todos
let todos = [];

//DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//Function to render todos
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    })
}

//Function to add todo
function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

//Function to edit todo
function editTodo(index) {
    const updatedTodo = prompt('Enter the new todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo;
        renderTodos();
    }
}

//Function to delete todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

//Event listeners
todoForm.addEventListener('submit', addTodo);

//Initial render
renderTodos();