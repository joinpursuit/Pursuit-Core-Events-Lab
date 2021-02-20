console.log("Code your solution!")
let ul = document.getElementById("unordered-list")

button.addEventListener("click", () => {

    let input = document.getElementById("text-input")
    let input1 = input.value
    
    debugger
    let li = document.createElement("li")
    debugger
    li.textContent = input1
    debugger
    ul.appendChild(li)
})




// let list = document.querySelector("#user-list")

// for (let i = 0; i < data.results.length; i++) {
//     let li = document.createElement("li");
//     let nationality = data.results[i].nat
//     let firstName = data.results[i].name.first
//     let lastName = data.results[i].name.last
//     li.textContent = `${firstName} ${lastName} (${nationality})`;
//     list.appendChild(li)