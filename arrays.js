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

let personas = [sasha,alan,martin]

console.log(personas)
console.log(personas[0])
console.log(personas[0].altura)
console.log(personas[0]['altura']) 

for (let i=0; i < personas.length; i++){
    let persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}