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
    var nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}


function imprimirNombreEnMayusculas2({nombre}){
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sasha);
imprimirNombreEnMayusculas2(dario);
imprimirNombreEnMayusculas2({nombre : 'pepito'});