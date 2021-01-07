let sasha = {
    nombre: 'Sasha',
    apellido : 'Moncada',
    altura : 1.72,
    cantidadDeLibros: 91 
}

let alan = {
    nombre: 'Alan',
    apellido : 'Salazar',
    altura : 1.50,
    cantidadDeLibros: 182
}

let martin = {
    nombre: 'Martin',
    apellido : 'Sanchez',
    altura : 1.80,
    cantidadDeLibros: 50
}


let personas = [sasha,alan,martin]
console.log(personas)

let acum = 0

for( let i =0; i < personas.length; i++){
    acum= acum + personas[i].cantidadDeLibros
}

console.log(`En total todos tienen ${acum} libros`)

const reducer= (acum,persona) => {
    return acum + persona.cantidadDeLibros
}

let totalDeLibros= personas.reduce(reducer,0)
console.log(`En total todos tienen ${totalDeLibros} libros`)

const reducer2 = (acum ,{cantidadDeLibros}) =>acum+cantidadDeLibros

let totalDeLibros2= personas.reduce(reducer2,0)
console.log(`En total todos tienen ${totalDeLibros2} libros`)