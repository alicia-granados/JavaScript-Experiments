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


function cumpleaños(persona){
    
    persona.edad += 1
}

console.log(cumpleaños(sasha));//MOSTRARA UNDEFINDED
/* ESTA FUNCIÓN DEVOLVER UN NUEVO OBJETO*/
function cumpleaños2(persona){
    return  {
        ...persona,
        edad:persona.edad+1
    }
}
console.log(cumpleaños2(sasha))//regresara el  objeto con la edad 30


