var sasha = {
    nombre: 'Sasha',
    apellido : 'Moncada',
    edad: 2
}

var juan ={
    nombre: 'Juan',
    edad: 88
}



const mayoriaDeEdad = 18


/*función anónima*/
var esMayorEdad = function (persona){
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

/*arrow function*/
const esMayorEdad2 = persona => persona.edad >= mayoriaDeEdad

function imprimirSiEsMayorDeEdad3(persona){

    if (esMayorEdad2(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }

}

imprimirSiEsMayorDeEdad3(sasha)

/*destructurtar en arrow functions*/
const esMayorDeEdad =  ({edad}) => edad >= mayoriaDeEdad

function imprimirSiEsMayorDeEdad4(persona){

    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }

}

imprimirSiEsMayorDeEdad4(sasha)

function permitirAcceso(persona){
    if (!esMayorEdad(persona)){
        console.log("Acesso Denegado")
    }
}
permitirAcceso(sasha)

const permitirAcceso2 = ({ edad }) => !esMayorDeEdad({ edad }) ? console.log('Acceso denegado') : console.log('Adelante')
permitirAcceso2(juan)
