function libros() {

    let url = "https://harry-potter-api.onrender.com/libros"
    fetch(url)
        .then(datos => datos.json())
        .then(salida => {
            for (let index = 0; index <= salida.length; index++) {

                let articulo = document.createElement("article")
                articulo.setAttribute("class", "libro")

                let titulo = document.createElement("span")
                titulo.setAttribute("class", "titulo")

                let fecha = document.createElement("p")
                fecha.setAttribute("class", "fecha")

                let autor = document.createElement("span")
                autor.setAttribute("class", "autor")

                let descripcion = document.createElement("p")
                descripcion.setAttribute("class", "descripcion")

                titulo.textContent = "Titulo: " + salida[index].libro
                fecha.textContent = "Fecha de lanzamiento: " + salida[index].fecha_de_lanzamiento
                autor.textContent = "Autor: " + salida[index].autora
                descripcion.textContent = salida[index].descripcion

                articulo.appendChild(titulo)
                articulo.appendChild(fecha)
                articulo.appendChild(autor)
                articulo.appendChild(descripcion)

                let contenedor = document.getElementById("contenedorDelibros")
                contenedor.appendChild(articulo)


            }
        })

}

libros()