document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
    })
    
    let submitButton = document.querySelector('#submitButton');
    submitButton.addEventListener('click', () => {
        let inputBox = document.querySelector("#inputText");
        let toDo = String(inputBox.value);
        let strArr = toDo.split("\n");
        console.log(strArr)
        inputBox.value = "";
        
        for(let str of strArr){
            if(str === ""){
                    let para = document.createElement('p');
                    para.setAttribute("class", 'errorPara');
                    para.textContent = "Error! Todo cannot be empty.";
                    document.body.appendChild(para);
            }else{
                if(document.body.contains(document.querySelector(".errorPara"))){
                    let paras = document.querySelectorAll(".errorPara");
                    for(let para of paras){
                        document.body.removeChild(para);
                    }
                }
                
                let uList = document.querySelector('#list');
                let listItem = document.createElement('li');
                listItem.textContent = str;

                let deleteButton =  document.createElement('button');
                deleteButton.addEventListener('click', (event)=>{
                    uList.removeChild(event.target.parentElement)
                })
                
                deleteButton.innerHTML = "Delete";
                deleteButton.style.margin = "5px 5px 5px 250px"
                listItem.appendChild(deleteButton);
                
                uList.appendChild(listItem);

                listItem.addEventListener('click', (event)=>{
                    
                    if(listItem.style.getPropertyValue("text-decoration") !== 'line-through'){
                        event.target.style.textDecoration = 'line-through';
                        
                    }else{
                        event.target.style.textDecoration = 'none';
                    }
                    
                })
            }
        }
        
    });
})