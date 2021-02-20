// console.log("Code your solution!");

let toDoInput = document.querySelector("#toDoInput");
let newTodoTask = document.querySelector("#newTodo");
let submitTodo = document.querySelector("#submitTodo");
submitTodo.addEventListener("click", (e) => {
  e.preventDefault();

  let newTodo = document.createElement("li");

  newTodo.textContent = toDoInput.value;
  newTodoTask.appendChild(newTodo);
});
let newToDoStyle = document.querySelector("#newTodo");
newToDoStyle.addEventListener("click", (e) => {
    debugger
  e.target.style.textDecoration = "line-through solid rgb(0, 0, 0)";;
});

// document.getElementById("newTodo").style.textDecoration =
//   "line-through solid rgb(0, 0, 0)";

// create ID for Ul
// creat ID for text
// create ID for button
// get queryselector for all 3
// get input from users input using query selector
// create new element using eventlistener onclick
// creating child then appending the child
