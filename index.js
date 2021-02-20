console.log("Code your solution!")
let ul = document.getElementById("unordered-list")
let form = document.querySelector("form")
form.button.addEventListener("click", (event) => {
    event.preventDefault();
    let input = document.getElementById("text-input")
    let input1 = input.value
    let p = document.querySelector("p")
    if(input1 === ""){
        p.innerText = "Error. Todo cannot be empty"

    }else{
        let li = document.createElement("li")
        li.textContent = input1
        ul.appendChild(li)
        p.innerText=""
    }
    
    
})




// let list = document.querySelector("#user-list")

// for (let i = 0; i < data.results.length; i++) {
//     let li = document.createElement("li");
//     let nationality = data.results[i].nat
//     let firstName = data.results[i].name.first
//     let lastName = data.results[i].name.last
//     li.textContent = `${firstName} ${lastName} (${nationality})`;
//     list.appendChild(li)