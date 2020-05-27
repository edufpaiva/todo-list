
        
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
        console.log(e);
        let id = e.target.id
        
        id = id.match(/item-[0-9]+/i)[0]
        

        console.log(id + "-body");
        
        if (document.getElementById(id + "-body").style.height == "auto") document.getElementById(id + "-body").style.height = "27px"
        else document.getElementById(id + "-body").style.height = "auto"

        
    });
}