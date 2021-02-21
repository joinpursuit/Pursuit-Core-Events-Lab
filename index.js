console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", (event) => {
  const input = document.querySelector("textarea");
  const form = document.querySelector("form");
  const ul = document.querySelector("ul");
  const p = document.querySelector("p");
  // const li = document.createElement("li");
  // const button = document.createElement("button");

  form.addEventListener("submit", (event) => {
    //prevents form from submitting
    event.preventDefault();

    // check if empty string passed in
    if (input.value === "") {
      p.textContent = "Error. Todo cannot be empty";
    } else {
      p.textContent = ""
      const lines = input.value.split("\n");
      for (const line of lines) {
        if (line.length !== 0) {
            
            // create the li
            const li = document.createElement("li");
            li.textContent = line;
            ul.appendChild(li);
            
            // need to attach the button to each li as it is created
            const button = document.createElement("button");
            button.textContent = "Remove";
            li.appendChild(button);
            
            // EVENT LISTENERS
            // click done to cross it out
            li.addEventListener("click", () => {
                if (li.style.textDecoration === "line-through") {
                    li.style.textDecoration = "none solid rgb(0, 0, 0)";
                    li.style.opacity = 1;
                } else {
                    li.style.textDecoration = "line-through";
                    li.style.opacity = 0.3;
                }
            });
            
            // click remove to delete
            button.addEventListener("click", () => {
                button.parentNode.remove();
            });
        }
      }
    }
    // reset the input value to empty string
    input.value = "";
  });
});

// ***TESTING
// const deleteChecked = (e) => {
// 	const item = e.target;
// 	**if button is clicked remove the list +. buttons
//  item.parent.remove();
// }
// li..addEventListener("click", deleteChecked);
