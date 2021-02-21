// console.log("Code your solution!")
let input = document.querySelector("#toDoInput");
let ul = document.querySelector("#newUl");
let form = document.querySelector("form")
// const button = document.querySelector("#submitTodo");


form.addEventListener("submit", (e) => {
    // debugger
    e.preventDefault();
    if (input.value === ""){
        pTag.textContent = "String Error Cannot submit empty ToDo";
    }else{
        pTag.textContent =""
        let li = document.createElement("li");
        // li.classList.add("todoList");
        li.textContent = input.value;
        ul.appendChild(li);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        li.appendChild(deleteButton);
        input.value =""
        deleteButton.addEventListener("click", (e)=>{
            deleteButton.parentNode.remove(e);
        })
        let newStyle = document.querySelector("#newUl");
        newStyle.addEventListener("click", (e) => {
          e.target.style.textDecoration = "line-through solid rgb(0,0, 0)";
          
          
        });
    }
});

// ul.addEventListener("dblclick",(e) =>{
//     e.target.parentNode.removeChild(e.target)
// })

