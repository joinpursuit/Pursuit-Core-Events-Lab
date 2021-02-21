let ul = document.querySelector("#newUl")
const button = document.querySelector("#submitTodo");
let input = document.querySelector("#toDoInput");
    button.addEventListener("click", (e) => {
        e.preventDefault();
    let li = document.createElement("li")
    li.classList.add("todoList");
    li.textContent = input.value;
    ul.appendChild(li);
    const list = document.getElementsByClassName("todoList")
})
    let newStyle = document.querySelector("#newUl")
newStyle.addEventListener("click", (e)=>{
    e.target.style.textDecoration = "line-through solid rgb(0,0, 0)"



})