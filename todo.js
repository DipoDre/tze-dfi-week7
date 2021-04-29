// Selectors
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');
const clearButton = document.querySelector('.clear-button');
const alertBox = document.querySelector('.alert');


// Functions

function addTodo(event) {
    event.preventDefault();
    let todoItem = todoInput.value;


    if(todoItem.length > 0) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo", "d-flex", "justify-content-between", "mb-3");
        
        const newTodo = document.createElement('div');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item", "h5", "align-middle", "my-auto");

        todoDiv.appendChild(newTodo);

        // Button Group
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add("button-group");
        
        // Item Buttons
        const checkItem = document.createElement('i');
        checkItem.classList.add("far", "fa-check-circle", "fa-lg", "check-item");
        buttonGroup.appendChild(checkItem);
        checkItem.addEventListener('click', checkTodo);

        const editItem = document.createElement('i');
        editItem.classList.add("far", "fa-edit", "fa-lg", "edit-item", "ml-3");
        buttonGroup.appendChild(editItem);
        editItem.addEventListener('click', editTodo);

        const deleteItem = document.createElement('i');
        deleteItem.classList.add("far", "fa-times-circle", "fa-lg", "delete-item", "ml-3");
        buttonGroup.appendChild(deleteItem);
        deleteItem.addEventListener('click', deleteTodo);

        todoDiv.appendChild(buttonGroup);

        todoList.appendChild(todoDiv);

        // Clear the todoInput text
        todoInput.value = "";

    } else {
        alertBox.classList.remove("d-none");

        setTimeout(function(){
            alertBox.classList.add("d-none");
            }, 5000);

    }
    

}


function deleteTodo(event) {
    let immediateParent = event.target.parentElement;
    let grandParent = immediateParent.parentElement;
    grandParent.remove();
}


function editTodo(event) {
    let immediateParent = event.target.parentElement;
    let grandParent = immediateParent.parentElement;

    let immediateChildren = grandParent.children;
    todoInput.value = immediateChildren[0].innerText;
    grandParent.remove();
    todoInput.focus();
}


function checkTodo(event) {
    let immediateParent = event.target.parentElement;
    let grandParent = immediateParent.parentElement;

    let immediateChildren = grandParent.children;
    immediateChildren[0].classList.toggle("line-through");
    checkItem.classList.toggle("disabled");
    
}


function clearTodo(event) {

    while (todoList.hasChildNodes()) {
        todoList.removeChild(todoList.firstChild);
    }
}


todoInput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
        event.preventDefault();
        addButton.click();
    }
});


// Event Listeners
addButton.addEventListener('click', addTodo);

clearButton.addEventListener('click', clearTodo);



