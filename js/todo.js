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
    li.remove(); //화면에서 삭제
    todos = todos.filter(item => item.id != parseInt(li.id))
    // firter : 삭제할 li의 id가 로컬스토리지 todos의 id와 같으면 삭제(false)
    // parstInt(li.id) : todo 데이터 추가 시(saveTodo), stringfy(todos)로 string으로 저장됨 > int로 형변환 필요!
    saveTodo();
}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id; //li 속성 id 추가
    const span = document.createElement('span');
    span.innerText = newTodo.text;

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
    const newTodoObj = {  //key:value로 저장!
        id: Date.now(), //Todo id
        text: newTodo,  //Todo text
    };

    todos.push(newTodoObj) //배열에 추가
    paintTodo(newTodoObj);  //화면에 출력
    saveTodo();  //로컬스토리지 TODOS에 저장
}

todoForm.addEventListener("submit", TodoSubmit);

const savedTodoList = localStorage.getItem(TODO_KEY);

if (savedTodoList !== null) {  //로컬값 존재하면
    const parsedTodos = JSON.parse(savedTodoList); //로컬 데이터들 배열로 변환
    todos = parsedTodos;  //배열에 저장
    parsedTodos.forEach(paintTodo);  //paintTodo([0, 1, ...])
}