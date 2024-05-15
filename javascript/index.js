document.addEventListener("DOMContentLoaded", function() {
    let imagen = document.getElementById("escoba");
    imagen.style.left = "37%"; /* Mueve la imagen hacia el centro de la pantalla */


  imagen.addEventListener("transitionend", function () {
    let parrafo=document.getElementById("contenedorBocadillo")
    parrafo.style.display="block"
    
  })
   
  });

  


  let botonVarita=document.getElementById("botonVarita");
  botonVarita.addEventListener("click", function (params) {
    window.location.href = "principal.html"
  })


