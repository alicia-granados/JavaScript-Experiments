let sasha = {
    nombre: 'Sasha',
    apellido : 'Moncada',
    altura : 1.72
}

let alan = {
    nombre: 'Alan',
    apellido : 'Salazar',
    altura : 1.50
}

let martin = {
    nombre: 'Martin',
    apellido : 'Sanchez',
    altura : 1.80
}

let juana = {
    nombre: 'Juana',
    apellido : 'Sanchez',
    altura : 1.90
}

let maria = {
    nombre: 'Maria',
    apellido : 'Garcia',
    altura : 1.82
}



let personas = [sasha,alan,martin,maria,juana]
console.log(personas)


const  esAlta = ({altura}) => altura >  1.8
let personasAltas = personas.filter(esAlta)
console.log(personasAltas)

const esBaja = ({altura}) => altura <=  1.8
let personasBajas = personas.filter(esBaja)
console.log(personasBajas)

const pasarAlturaACms = ({altura}) => altura *= 100
let personasCms =personas.map(pasarAlturaACms)
console.log(personasCms)


const pasarAlturaACms2 = persona => {

    return {
        ...persona,
        altura:   persona.altura *= 100
    }

}

let personasCms2 =personas.map(pasarAlturaACms2)
console.log(personasCms2)






