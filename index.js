console.log("Code your solution!");
let ul = document.getElementById("unordered-list");
let form = document.querySelector("form");
form.button.addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.getElementById("text-input");
  let input1 = input.value;
  let li = document.createElement("li");
  let p = document.querySelector("p");
  let btn = document.createElement("button");
  if (input1 === "") {
    p.innerText = "Error. Todo cannot be empty";
  } else {
    btn.textContent = "Delete";
    li.textContent = input1 + " ";
    ul.appendChild(li);
    li.appendChild(btn);
    p.textContent = "";
    form.reset();
  }
  ul.addEventListener("click", (event) => {
      debugger
    if (event.target.style.textDecoration = "none") {
        debugger
    event.target.style.textDecoration = "line-through";
    }
    else if (event.target.style.textDecoration = "line-through") {
        debugger
        event.target.style.textDecoration = "initial"
    }
  });
  
  
  
    btn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });
});
