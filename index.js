// console.log("Code your solution!");

let toDoInput = document.querySelector("#toDoInput");
let ul = document.querySelector("ul");
let form = document.querySelector("form");
let pTag = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (toDoInput.value.length === 0) {
    pTag.textContent = "String Errror - Cannot submit empty ToDo";
  } else {
    const lines = toDoInput.value.split("\n");
   
    for (const line of lines) {
      const listItem = document.createElement("li");
      const deleteButton = document.createElement("button");
      if (line) {
        listItem.textContent = line;
        ul.appendChild(listItem);

        deleteButton.innerHTML = "Delete";
        listItem.appendChild(deleteButton);
        pTag.textContent = "";
      }

      deleteButton.addEventListener("click", (e) => {
        deleteButton.parentNode.remove(e);
      });

      listItem.addEventListener("click", (e) => {
        
        if (listItem.style.textDecoration === "line-through") {
          listItem.style.textDecoration = "none";
        } else {
          listItem.style.textDecoration = "line-through";
        }
      });
    }
  }
  toDoInput.value = "";
});

// create ID for Ul
// creat ID for text
// create ID for button
// get queryselector for all 3
// get input from users input using query selector
// create new element using eventlistener onclick
// creating child then appending the child
