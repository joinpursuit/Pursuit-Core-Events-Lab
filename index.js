document.addEventListener('DOMContentLoaded', ()=>{
   
   function listToDo (){
    let input = document.getElementById('input').value
    const user = document.querySelector('#to-do')
    let para = document.createElement('li')
    p = document.getElementById('ERROR')
        para.textContent = input
        user.appendChild(para)
     if(input === ""){
         p.textContent = `Error, ${`"Form"`} can't be empty `
     }   
   }

 const form = document.getElementById('form')
  let user = document.getElementById('to-do')
  let para = document.querySelectorAll('li')
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        listToDo()
    })

    user.addEventListener('click', (elem)=>{
        if(elem.target.style.textDecoration === "line-through"){
            elem.target.style.textDecoration = "none"
        }else{
            elem.target.style.textDecoration = "line-through"
        }
    })
    
})


console.log("Code your solution!")
