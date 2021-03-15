console.log("Code your solution!");

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul");
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let textArea = document.querySelector("textarea");
    const p = document.querySelector("p");
    const words = textArea.value.split("\n");
    if (textArea.value === "") {
      p.innerText = "Error: To-Do List cannot be empty";
    } else {
      for (word of words) {
          if(word !== ""){
        let li = document.createElement("li");
        li.textContent = word;
        ul.appendChild(li);
        debugger
        p.innerText = "";

        let delButton = document.createElement("button");
        delButton.classList.add("delete-button")
        delButton.innerText = "x";
        li.append(delButton);

        delButton.addEventListener("click", () => {
          ul.removeChild(li);
        });
            }
      }
    }

    textArea.value = "";
  });

  const removeStrikethrough = (event) => {
    if (event.target.style.textDecorationLine === "line-through") {
      event.target.style.textDecorationLine = "none";
    } else {
      event.target.style.textDecorationLine = "line-through";
    }
  };

  let list = document.querySelector("ul");
  list.addEventListener("click", removeStrikethrough);
});
