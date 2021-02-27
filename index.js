let ul = document.getElementById("unordered-list");
let form = document.querySelector("form");
form.button.addEventListener("click", (event) => {
  event.preventDefault();
  let inputAll = document.getElementById("text-input").value;
  let input = inputAll.split("\n")
  for (const el of input) {
  let p = document.querySelector("p");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  if (el.length === 0) {
    p.innerText = "Error. Todo cannot be empty";
  } else {
    btn.textContent = "Delete";
    li.textContent = el + " ";
    ul.appendChild(li);
    li.appendChild(btn);
    p.textContent = "";
    form.reset();
  }
  btn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });
  ul.addEventListener("click", (event) => {
    if (event.target.style.textDecoration !== "line-through") {
      event.target.style.textDecoration = "line-through";
    }else{
    event.target.style.textDecoration = "none";
    }
  });
}

});


