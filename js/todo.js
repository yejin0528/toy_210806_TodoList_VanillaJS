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
    const li = event.target.parentElement;  //해당 li의 부모 엘리먼트
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
    paintTodo(newTodo);  //화면에 출력
    saveTodo();  //로컬 키 TODOS에 저장
}

todoForm.addEventListener("submit", TodoSubmit);

const savedTodoList = localStorage.getItem(TODO_KEY);

if (savedTodoList !== null) {  //로컬값 존재하면
    const parsedTodos = JSON.parse(savedTodoList); //로컬 데이터들 배열로 변환
    todos = parsedTodos;  //배열에 저장
    parsedTodos.forEach(paintTodo);  //paintTodo([0, 1, ...])
}