document.addEventListener('DOMContentLoaded', () => {
    let containsP = false;
    let form = document.querySelector('#todo_list_form');
    let todo = document.querySelector('#todo_list');
    let body = document.querySelector('body')
    let p = document.createElement('p');
    p.classList.add('error_message');
    let errorMessage = 'Error! Todo cannot be empty!';
    body.appendChild(p);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = document.querySelector('#add_to_todo_list');
        let item = input.value;
        if(item){
            let li = document.createElement('li');
            li.classList.add('list_item');
            let button = document.createElement('button');
            button.classList.add('delete_item');
            button.textContent = 'Delete';
            li.textContent = item;
            todo.appendChild(li);
            li.appendChild(button);
            input.value = "";
            button.addEventListener('click', event => {
                let killParent = event.target.parentNode;
                killParent.parentNode.removeChild(killParent);
            });
            if(p.textContent = errorMessage) {
                p.textContent = '';
            }
        } else {
            p.textContent = errorMessage;
        }
    });
    todo.addEventListener('click', (event) => {
        if(event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)'){
            event.target.style.textDecoration = 'none';
        } else {
            event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
        }
    });
});



