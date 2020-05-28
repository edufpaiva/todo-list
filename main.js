
class User{
    constructor (name, matricula, email, todos = []){
        this.name = name;
        this.matricula = matricula;
        this.email = email;
        this.todos = todos;
    }

}

class SubTodo{
    TYPE_INCOMPLETE = 1
    TYPE_COMPLETE = 2
    TYPE_INFO = 3
    constructor(id, name, description, type = this.TYPE_INCOMPLETE, imgs = [], links = []){
        this.id = id;
        this.name = name;
        this.description = description;
        this.isComplete = type;
        this.imgs = imgs;
        this.links = links;
    }
}

class Todo{
    constructor(id, name, description, isComplete = false, subtodos = []){
        this.id = id;
        this.name = name;
        this.description = description;
        this.isComplete = isComplete;
        this.subtodos = subtodos;
    }
}

const users = {"YSP104187":(new User("Eduardo Paiva", "YSP104187", "eduardoj.paiva@lge.com"))}
var USER = null

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function listeners(){

    

    $(".item-header").click(function (e) { 
        e.preventDefault();
        // console.log(e);
        let id = e.target.id
        
        id = id.match(/item-[0-9]+/i)[0]
        

        // console.log(id + "-body");
        
        if (document.getElementById(id + "-body").style.height == "auto") document.getElementById(id + "-body").style.height = "27px"
        else document.getElementById(id + "-body").style.height = "auto"

        
    });

    $("img").click(function (e) { 
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.src);
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=0,height=0,left=-1000,top=-1000`
        window.open(e.target.src, "img", params)
        


    });

}


function loadUser(){


    if (sessionStorage.getItem("matricula") != null){
        let mat = sessionStorage.getItem("matricula")
        USER = JSON.parse(localStorage.getItem(mat))
    }else{
        let mat = prompt("Digite sua Matricula", "YSP104187").toUpperCase()
        if (localStorage.getItem(mat) != null){
            USER = JSON.parse(localStorage.getItem(mat))
        }else{
            if(users[mat] != null){
                USER = users[mat]
                saveUserToLocalStorage()
            }else{
                let nome = prompt("Digite seu nome", "")
                let email = prompt("Digite seu email", "")

                USER = new User(nome, mat, email)

                saveUserToLocalStorage()
            }
        }
    }

    showTodos()
}



function addTodo() {
    let name = ""
    let des  = ""

    while(name == ""){
        name = prompt("Qual o nome da tarefa?")
        if(name == null) {
            alert("Add Todo cancelado")
            return null
        }
    }
    while(des == "") {
        des = prompt("Descreva a tarefa")
        if( des == null) {
            alert("Add Todo cancelado")
            return null
        }
    }

    let date = new Date()
    let id = date.getDate() + date.getMonth() + date.getFullYear() + date.getHours() + date.getMinutes() + date.getMilliseconds() + ""

    let todo = new Todo(USER.matricula + id, name, des)

    USER.todos.push(todo);
    saveUserToLocalStorage()
    // console.log(USER)
    showTodos()
}

function showTodos() {

    txt = ""

    for(let todo_i in USER.todos){
        txt += '<div class="item">';
        txt += '    <div id="item-' + (todo_i + 1) + '-header" class="item-header">' + USER.todos[todo_i].name + '</div>';
        txt += '    <div id="item-' + (todo_i + 1) + '-body" class="item-body">';
        txt += '        <div id="item-' + (todo_i + 1) + '-description" class="item-description">'+USER.todos[todo_i].description+'</div>';
        txt += '    </div>';
        txt += '</div>';
        
    }

    document.getElementById("todo-list").innerHTML = txt
}


function saveUserToLocalStorage(){
    localStorage.setItem(USER.matricula, JSON.stringify(USER))
    sessionStorage.setItem("matricula", USER.matricula)
}