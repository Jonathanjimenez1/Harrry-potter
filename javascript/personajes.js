function personajes() {
    fetch("https://harry-potter-api.onrender.com/personajes")
    .then(datos => datos.json())
    .then( personaje=> {


       for (let index =0; index <= personaje.length; index++) {

         
       
          let articulo=document.createElement("article");
          articulo.setAttribute("class", "articulo")

          let apodo= document.createElement("h3")
           apodo.textContent= "Apodo: "+ personaje[index].apodo;
           apodo.setAttribute("class", "apodo" )

        let casa=document.createElement("span")
        casa.textContent="Casa a la que pertenece " +personaje[index].casaDeHogwarts
        casa.setAttribute("class", "casa")

        let actor=document.createElement("p")
        actor.textContent="Actor que lo interpreta "+ personaje[index].interpretado_por
        actor.setAttribute("class", "actor")



        let Personaje= document.createElement("span")
        Personaje.textContent= "Personaje que interpreta " + personaje[index].personaje;
        Personaje.setAttribute("class", "personaje")

        let imagen=document.createElement("img")
        imagen.setAttribute("src", personaje[index].imagen)
        imagen.setAttribute("class", "imagen")

        let div=document.createElement("div")
        div.appendChild(imagen)

        articulo.appendChild(apodo);
        articulo.appendChild(casa);
        articulo.appendChild(actor);
        articulo.appendChild(Personaje);
        articulo.appendChild(div);


        let contenedor=document.getElementById("contenedorPersonajes");

        contenedor.appendChild(articulo)
          

        
       }
    })
    
}

personajes()

