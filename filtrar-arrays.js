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

const  esAlta = (persona) => persona.altura >  1.8

let personas = [sasha,alan,martin,maria,juana]
console.log(personas)

let personasAltas = personas.filter(esAlta)
console.log(personasAltas)

let personasAltas2 = personas.filter(function(persona){
    return persona.altura > 1.8
})
console.log(personasAltas2)

const  esAlta2 = ({altura}) => altura >  1.8
let personasAltas3 = personas.filter(esAlta2)
console.log(personasAltas3)

const esBaja = ({altura}) => altura <=  1.8
let personasBajas = personas.filter(esBaja)
console.log(personasBajas)