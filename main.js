
class User{
    constructor (name, matricula, email, todos = []){
        this.name = name;
        this.matricula = matricula;
        this.email = email;
        this.todos = todos;
    }

}

class SubTodo{
    constructor(id, name, description, isComplete = false, imgs = [], links = []){
        this.id = id;
        this.name = name;
        this.description = description;
        this.isComplete = isComplete;
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