// console.log("Code your solution!")
let input = document.querySelector("#toDoInput");
let ul = document.querySelector("#newUl");
let form = document.querySelector("form")
// const button = document.querySelector("#submitTodo");


form.addEventListener("submit", (e) => {
    // debugger
    e.preventDefault();
    if (input.value === ""){
        pTag.textContent = "Error! ToDo cannot be empty";
    }else{
        pTag.textContent =""
        let li = document.createElement("li");
        li.classList.add("todoList");
        li.textContent = input.value;
        ul.appendChild(li);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        li.appendChild(deleteButton); //Implement a delete `button` next to each `li` that removes that `li` tag entirely.
        input.value ="" //Have the input go back to empty after adding a new todo.
        deleteButton.addEventListener("click", (e)=>{
            deleteButton.parentNode.remove(e);
        })

        let newStyle = document.querySelector("#newUl");
        newStyle.addEventListener("click", (e) => {
            if(e.target.style.textDecoration === "none"){
                e.target.style.textDecoration = "line-through solid rgb(0,0, 0)";
                // debugger
            } else {
                e.target.style.textDecoration = "none";
        //   debugger
          //Clicking a todo that is crossed out (completed) uncrosses the todo. 
            };
        });
    }
});

// ul.addEventListener("dblclick",(e) =>{
//     e.target.parentNode.removeChild(e.target)
// })

