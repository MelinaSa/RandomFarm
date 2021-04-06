//from html

var game = document.getElementById("amor");
var paper = game.getContext("2d"); 

//variables

var backG={
    url:"tile.png",
    cargaOk: false
}
var cows={
    url:"vaca.png",
    cargaOk: false
}
var pigs={
    url:"cerdo.png",
    cargaOk: false
}
var chickens={
    url:"pollo.png",
    cargaOk: false
}


//cargando imagenes

backG.imagen = new Image();
backG.imagen.src = backG.url;
backG.imagen.addEventListener("load", toDrawBackG);

cows.imagen = new Image();
cows.imagen.src = cows.url;
cows.imagen.addEventListener("load", toDrawCows);

pigs.imagen = new Image();
pigs.imagen.src = pigs.url;
pigs.imagen.addEventListener("load", toDrawPigs);

chickens.imagen = new Image();
chickens.imagen.src = chickens.url;
chickens.imagen.addEventListener("load", toDrawChickens);


//funciones carga

function toDrawBackG()
{
    backG.cargaOk =true;   //.cargaok del bloque de cod de la var backg
    toDrawEverything();
}
function toDrawCows()
{
    cows.cargaOk =true;
    toDrawEverything();
}
function toDrawPigs()
{
    pigs.cargaOk =true;
    toDrawEverything();
}
function toDrawChickens()
{
    chickens.cargaOk =true;
    toDrawEverything();
}

//main function

function toDrawEverything()
{
    if(backG.cargaOk)
    {
        paper.drawImage(backG.imagen, 0, 0);
    }
    if(cows.cargaOk)
    {
        randomXY(cows.imagen);
    }
    if(pigs.cargaOk)
    {
        randomXY(pigs.imagen);
    }
    if(chickens.cargaOk)
    {
        randomXY(chickens.imagen);
    }
    
}
//funcion de coordenadas
function randomXY(animalPic)
{
    var cv = random(1,100)
    for (var v=0; v < cv ;v++ )
    {
        var x = random(0, 7);
        var y = random(0, 10);
        var x = x * 60;
        var y = y * 40;
        paper.drawImage(animalPic, x, y);
    }
}
///random integer

function random(min, max)
{
    var result;
    result = Math.floor(Math.random()*(max - min +1) ) + min;
    return result;
}