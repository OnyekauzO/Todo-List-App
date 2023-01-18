var todoArr = [];

function saveTodo() {
    var todo = document.querySelector('#todoText').value;
    var desc = document.querySelector('#todoDesc').value;

    if (todo === "" || desc === ""){
        alert("Please fill in every input field");
        return;   // this prevents an error message  
    }
    var todoObject = {
        text: todo,
        desc: desc,
        done: false
    };

    todoArr.push(todoObject);
    document.querySelector('#todoText').value = ""
    document.querySelector('#todoDesc').value = ""

    console.log(todoArr);
    displayTodo();
}

function displayTodo() {
    var content = "";
    for (var i = 0; i < todoArr.length; i++) {
        if (todoArr[i].done) {     // if done property is false
            content +=  // content = content + `created tags`
            `<p class="shadow p-2 mb-2 text-success">
                ${todoArr[i].text} <br> 
                <small class="text-muted">${todoArr[i].desc}</small>
                <button onclick="markAsDone(${i})" class="btn btn-success btn-sm float-end mb-4" disabled>Done</button>
            </p>`
        }else{
            content += 
            `<p class="shadow p-2 mb-2">
                ${todoArr[i].text} <br> 
                <small class="text-muted">${todoArr[i].desc}</small>
                <button onclick="markAsDone(${i})" class="btn btn-danger btn-sm float-end mb-4">Mark as done</button>
            </p>`
        }
    }
    document.querySelector("#todoBox").innerHTML = content
}

function markAsDone(i) {
    todoArr[i].done = true;
    displayTodo();
}


