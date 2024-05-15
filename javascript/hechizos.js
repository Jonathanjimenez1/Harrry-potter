async function hechizos() {

    let url="https://harry-potter-api.onrender.com/hechizos";
    let salida= await fetch(url)
    let  datos= await salida.json()

    

    for (let index = 0; index <= datos.length; index++) {
        
        let articulo=document.createElement("article");
        articulo.setAttribute("class", "articulo");

        let hechizos=document.createElement("span");
        hechizos.setAttribute("class", "hechizo");
        hechizos.textContent="hechizo: " + datos[index].hechizo;

        let usos= document.createElement("p");
        usos.setAttribute("class", "uso");
        usos.textContent= "uso: " + datos[index].uso;

        let divBotones=document.createElement("div");
        divBotones.setAttribute("class", "botones");

        let botonHarry=document.createElement("button");
        botonHarry.addEventListener("click", harry);
        botonHarry.textContent="Probar hechizo con Harry"

        
        let botonRon=document.createElement("button");
        botonRon.addEventListener("click", ron);
        botonRon.textContent="Probar hechizo con Ron"

        
        let botonHermione=document.createElement("button");
        botonHermione.addEventListener("click", hermione);
        botonHermione.textContent="Probar hechizo con Hermione"

        divBotones.appendChild(botonHarry);
        divBotones.appendChild(botonRon);
        divBotones.appendChild(botonHermione);

        let divBocadillo= document.createElement("div");
        divBocadillo.setAttribute("class", "bocadillo");

        let textoBocadillo=document.createElement("div");
        textoBocadillo.setAttribute("id", "textoBocadillo");
        textoBocadillo.textContent= datos[index].hechizo;

        divBocadillo.appendChild(textoBocadillo);


        let divGif= document.createElement("div")
        divGif.setAttribute("id", "gif")

        let imagen=document.createElement("img")
        imagen.setAttribute("id", "imagen")

        divGif.appendChild(imagen)

        articulo.appendChild(hechizos)
        articulo.appendChild(usos)
        articulo.appendChild(divBotones)
        articulo.appendChild(divBocadillo)
        articulo.appendChild(divGif);

        let selector=document.getElementById("contenedorHechizos");
        selector.appendChild(articulo)
    }

    

    
}
hechizos()


 
function harry(event) {
    var div = event.target.parentNode.parentNode; // Acceder al div padre del botón
    var bocadillo = div.querySelector('.bocadillo');
    bocadillo.style.display = 'block';

    var gif = div.querySelector("#gif");
    gif.style.display = "block";

    let imagen = gif.querySelector("#imagen");
    imagen.setAttribute("src", "imagenes/harrygif.gif");

    setTimeout(function() {
        bocadillo.style.display = 'none';
        gif.style.display = "none";
    }, 2000); // Mostrar la imagen durante 2 segundos
}

function ron(event) {
    var div = event.target.parentNode.parentNode; // Acceder al div padre del botón
    var bocadillo = div.querySelector('.bocadillo');
    bocadillo.style.display = 'block';

    var gif = div.querySelector("#gif");
    gif.style.display = "block";

    let imagen = gif.querySelector("#imagen");
    imagen.setAttribute("src", "imagenes/ron.gif");

    setTimeout(function() {
        bocadillo.style.display = 'none';
        gif.style.display = "none";
    }, 2000); // Mostrar la imagen durante 2 segundos
}


function hermione(event) {
    var div = event.target.parentNode.parentNode; // Acceder al div padre del botón
    var bocadillo = div.querySelector('.bocadillo');
    bocadillo.style.display = 'block';

    var gif = div.querySelector("#gif");
    gif.style.display = "block";

    let imagen = gif.querySelector("#imagen");
    imagen.setAttribute("src", "imagenes/hermione.gif");

    setTimeout(function() {
        bocadillo.style.display = 'none';
        gif.style.display = "none";
    }, 2000); // Mostrar la imagen durante 2 segundos
}




