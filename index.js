function unorderedList(){
    let list = document.getElementById("text-area").value
    let ulList = document.getElementById("ul")
    let li = document.createElement('li')
    li.textContent = list
    let error = document.getElementById("error")
    ulList.appendChild(li)

    if(list === ''){
        error.textContent = "Error! TODO list cannot be empty!"
    }
}