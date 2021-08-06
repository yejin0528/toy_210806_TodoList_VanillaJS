const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

const TODO_KEY = "TODOS";
let todos = [];

function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    //JSON.stringify : 뭐든 문자열로 바꿈  ex)["1", "2", "3"]
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;

    const delBtn = document.createElement('button');
    delBtn.innerText = "X";
    delBtn.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function TodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    todos.push(newTodo) //배열에 추가
    paintTodo(newTodo);
    saveTodo();
}

todoForm.addEventListener("submit", TodoSubmit);