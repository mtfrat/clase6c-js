let alumnos = [
    {nombre: "Pablo",apellido: "Rodriguez",edad: 18,notaFinal: 7},
    {nombre: "Florencia",apellido: "Gomez",edad: 17,notaFinal: 5},
    {nombre: "Gabriel",apellido: "Santos",edad: 18,notaFinal: 8},
    {nombre: "Jeremias",apellido: "Barla",edad: 18,notaFinal: 3},
    {nombre: "Josefina",apellido: "Isaias",edad: 19,notaFinal: 10},
    {nombre: "Catalina",apellido: "Perez",edad: 16,notaFinal: 6}
]

function analisisComando(){

    let comando = prompt("Mostrar resultados ordenados por:\n1.Nombre\n2.Apellido\n3.Edad\n4.Nota Final")

    comando = comando.toLowerCase()

    if (comando == "1" || comando == "nombre") {
        ordenNombre()
    } else if (comando == "2" || comando == "apellido") {
        ordenApellido()
    } else if (comando == "3" || comando == "edad") {
        ordenEdad()
    } else if (comando == "4" || comando == "nota final") {
        ordenNota()
    }
    else{
        console.log("Seleccione una opción válida")
        analisisComando()
    }
}

function ordenNombre() {

    let sentidoOrdenamiento = prompt("Desea ver los resultados ordenados:\n1.De forma ascendente\n2.De forma descendente")

    sentidoOrdenamiento = sentidoOrdenamiento.toLowerCase()

    if(sentidoOrdenamiento == "1" || sentidoOrdenamiento == "de forma ascendente"){
        ordenNombreAscendente()
    } else if(sentidoOrdenamiento == "2" || sentidoOrdenamiento == "de forma descendente"){
        ordenNombreDescendente()
    }else{
        console.log("Error, introduzca valor válido")
        ordenNombre()
    }
}

function ordenNombreAscendente() {
    console.log("Datos ordenados por nombre ascendentemente")
    alumnos.sort((a,b) => {
        let e1 = a.nombre.toLowerCase(), e2 = b.nombre.toLowerCase()

        if(e1<e2){
            return -1
        }
        if(e1>e2){
            return 1
        }
        return 0
    })
    console.log(alumnos)
}

function ordenNombreDescendente() {
    console.log("Datos ordenados por nombre descendentemente")
    alumnos.sort((a,b) => {
        let e1 = a.nombre.toLowerCase(), e2 = b.nombre.toLowerCase()

        if(e1<e2){
            return 1
        }
        if(e1>e2){
            return -1
        }
        return 0
    })
    console.log(alumnos)
}

function ordenApellido() {

    let sentidoOrdenamiento = prompt("Desea ver los resultados ordenados:\n1.De forma ascendente\n2.De forma descendente")

    sentidoOrdenamiento = sentidoOrdenamiento.toLowerCase()

    if(sentidoOrdenamiento == "1" || sentidoOrdenamiento == "de forma ascendente"){
        ordenApellidoAscendente()
    } else if(sentidoOrdenamiento == "2" || sentidoOrdenamiento == "de forma descendente"){
        ordenApellidoDescendente()
    }else{
        console.log("Error, introduzca valor válido")
        ordenApellido()
    }
    
}

function ordenApellidoAscendente() {
    console.log("Datos ordenados por apellido ascendentemente")
    alumnos.sort((a,b) => {
        let e1 = a.apellido.toLowerCase(), e2 = b.apellido.toLowerCase()

        if(e1<e2){
            return -1
        }
        if(e1>e2){
            return 1
        }
        return 0
    })
    console.log(alumnos)
}

function ordenApellidoDescendente() {
    console.log("Datos ordenados por apellido descendentemente")
    alumnos.sort((a,b) => {
        let e1 = a.apellido.toLowerCase(), e2 = b.apellido.toLowerCase()

        if(e1<e2){
            return 1
        }
        if(e1>e2){
            return -1
        }
        return 0
    })
    console.log(alumnos)
}



function ordenEdad() {

    let sentidoOrdenamiento = prompt("Desea ver los resultados ordenados:\n1.De forma ascendente\n2.De forma descendente")

    sentidoOrdenamiento = sentidoOrdenamiento.toLowerCase()

    if(sentidoOrdenamiento == "1" || sentidoOrdenamiento == "de forma ascendente"){
        console.log("Datos ordenados por edad ascendentemente")
        alumnos.sort((a,b) => a.edad - b.edad)
        console.log(alumnos)
    } else if(sentidoOrdenamiento == "2" || sentidoOrdenamiento == "de forma descendente"){
        console.log("Datos ordenados por edad descendentemente")
        alumnos.sort((a,b) => b.edad - a.edad)
        console.log(alumnos)
    }else{
        console.log("Error, introduzca valor válido")
        ordenEdad()
    }
}

function ordenNota() {

    let sentidoOrdenamiento = prompt("Desea ver los resultados ordenados:\n1.De forma ascendente\n2.De forma descendente")

    sentidoOrdenamiento = sentidoOrdenamiento.toLowerCase()

    if(sentidoOrdenamiento == "1" || sentidoOrdenamiento == "de forma ascendente"){
        console.log("Datos ordenados por nota ascendentemente")
        alumnos.sort((a,b) => a.notaFinal - b.notaFinal)
        console.log(alumnos)
    } else if(sentidoOrdenamiento == "2" || sentidoOrdenamiento == "de forma descendente"){
        console.log("Datos ordenados por nota descendentemente")
        alumnos.sort((a,b) => b.notaFinal - a.notaFinal)
        console.log(alumnos)
    }else{
        console.log("Error, introduzca valor válido")
        ordenNota()
    }
}

console.log("...:::Sistema de gestión de alumnos:::...")

analisisComando()