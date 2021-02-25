
document.addEventListener("DOMContentLoaded",()=>{


let form = document.querySelector("form")
let newUl = document.querySelector("ul")
let blank = document.createElement("p");




form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let input = document.querySelector("textarea")
    let valueInput = input.value
    const arrangedString = valueInput.split("\n")
 console.log(arrangedString)
  for(let i=0;i<arrangedString.length;i++){
    let newLi2 = document.createElement("li")
    newLi2.textContent = arrangedString[i]
      newUl.appendChild(newLi2)


      const remove = document.createElement("button")
      remove.textContent = "delete"
        newLi2.appendChild(remove)
        remove.addEventListener('click',(e)=>{
        newLi2.parentNode.removeChild(newLi2)
       })
  }
  input.value = '';

  
  
  
  if(valueInput === ''){
    blank.textContent = "Todo cannot be empty!"
    document.body.appendChild(blank)   

}


  newUl.addEventListener("click",(e)=>{
    e.target.style.textDecoration = "line-through"
    //    if(e.target.style.textDecoration === "none"){
    //     e.target.style.textDecoration = "line-through"
    //    } else {
    //     e.target.style.textDecoration = "none"
    //    }
       

  })


})

console.log("Code your solution!")
})

 


