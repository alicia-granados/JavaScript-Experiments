var nombre = 'Sasha', edad=28

function imprimirEdad (n,e){
    console.log(`${nombre} tiene ${edad} años`)
}
imprimirEdad(nombre,edad);

/*alcance de las funciones*/
function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);