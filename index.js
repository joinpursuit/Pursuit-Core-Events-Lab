document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('#todo_list_form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let todo = document.querySelector('#todo_list')
        let input = document.querySelector('#add_to_todo_list');
        let item = input.value;
        if(item){
            let li = document.createElement('li');
            li.classList.add('list_item');
            li.textContent = item;
            todo.appendChild(li);
            input.value = '';
        } else {
            let body = document.querySelector('body');
            let p = document.createElement('p');
            p.classList.add('error_message');
            let errorMessage = 'Error! Todo cannot be empty!'
            p.textContent = errorMessage;
            body.appendChild(p);
        }
    });
});