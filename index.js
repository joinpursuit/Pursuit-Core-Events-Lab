console.log("Code your solution!");
let ul = document.getElementById("unordered-list");
let form = document.querySelector("form");
form.button.addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.getElementById("text-input");
  let input1 = input.value;
  let p = document.querySelector("p");
  let li = document.createElement("li");
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
  btn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });
});
ul.addEventListener("click", (event) => {
  if (event.target.style.textDecoration !== "line-through") {
    event.target.style.textDecoration = "line-through";
  }else{
  event.target.style.textDecoration = "none";
  }
});