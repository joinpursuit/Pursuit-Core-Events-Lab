console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //INVOKE () preventDefault()!!!
    const input = document.querySelector("input");
    if (input.value.length === 0) {
      const errorMessage = document.querySelector("p");
      errorMessage.textContent = "Error. Todo cannot be empty";
    } else {
      const listItem = document.createElement("li");
      const deleteButton = document.createElement("button");
      listItem.textContent = input.value;
      document.querySelector("ul").appendChild(listItem);
      listItem.appendChild(deleteButton);
      deleteButton.textContent = "Delete";
      
      
      deleteButton.addEventListener("click", (event) => {
        event.parentNode.removeChild(event.parentNode.parentNode);
          //   debugger;
      });

    }
    
    input.value = "";

  });

  //   var element = document.createElement("button");
  //   element.appendChild(document.createTextNode("Click Me!"));
  //   var page = document.getElementById("btn");
  //   page.appendChild(element);
  //   console.log(element);

  const crossOut = document.querySelector("ul");
  crossOut.addEventListener("click", (event) => {
    event.target.style.textDecoration = "line-through";
  });
});

// e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
