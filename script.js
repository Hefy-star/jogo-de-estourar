function addBola() {
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random() * 1500);
    var p2 = Math.floor(Math.random() * 700);
    var red = Math.floor(Math.random() * 500);
    var green = Math.floor(Math.random() * 400);
    var blue = Math.floor(Math.random() * 255);

    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:rgb("+red+","+green+","+blue+")");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}
function estourar(objeto) {
    document.body.removeChild(objeto);
    
}
function iniciar() {
    setInterval(addBola, 1000);
}