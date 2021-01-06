var sasha ={
    nombre: 'Sasha',
    apellido: 'Monjaras',
    edad: 28
}

var dario ={
    nombre : 'Dario',
    apellido: 'Moncada',
    edad : 27
}

function imprimirNombreEnMayusculas(persona){

    /* nombre=persona.nombre*/
    var  {nombre} = persona
    console.log(nombre.toUpperCase());

}

imprimirNombreEnMayusculas(sasha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre : 'pepito'});

function imprimirNombreyEdad(persona){
    
    var {nombre,edad}= persona
    console.log("Hola,me llamo "+nombre+ " y tengo "+edad+"años");

}

imprimirNombreyEdad(sasha);
imprimirNombreyEdad(dario);