console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); //INVOKE () preventDefault()!!!
    const input = document.querySelector("#to-Do-List");
    let extendedInput = input.value.split("\n");
    const ul = document.querySelector("ul");
    // BONUS MULTIPLE LINE ENTRY IDEAS: the textarea tag creates a string as the value. Each entry has a space between the next. The logic @ the moment is to get the value of the input --> split it into an array --> and then either iterate through the array and into the "li" or push into a blank array and then interate that array into the "li".
    if (extendedInput.length === 0) {
      const errorMessage = document.querySelector("p");
      errorMessage.textContent = "Error. Todo cannot be empty";
    } else {
      extendedInput.forEach((item) => {
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");
        // console.log(item);
        // debugger
        listItem.textContent = item;
        ul.appendChild(listItem);
        listItem.appendChild(deleteButton);
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("del-button");
        deleteButton.addEventListener("click", (event) => {
          debugger;
          // event.target.parentNode.removeChild(event.target);
          event.path[1].parentNode.removeChild(event.path[1]);
          // event.target.parentNode.removeChild(li);
        });
      })  
      

      
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
    // event.target.style.textDecoration = "line-through";
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  });

  


});


