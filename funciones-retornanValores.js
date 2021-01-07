var sasha = {
    nombre: 'sasha',
    apellido : 'Moncada',
    edad: 28
}

var juan ={
    nombre: 'Juan',
    edad: 2
}

function imprimirSiEsMayorDeEdad(persona){

    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }

}

imprimirSiEsMayorDeEdad(sasha)

const mayoriaDeEdad = 18


function esMayorEdad(persona){
    return persona.edad >=mayoriaDeEdad
}


function imprimirSiEsMayorDeEdad2(persona){

    if (esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }

}

imprimirSiEsMayorDeEdad2(juan)





