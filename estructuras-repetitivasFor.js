let sasha = {
    nombre: 'Sasha',
    apellido : 'Moncada',
    edad: 28, 
    peso: 75
}

console.log(`Al inicio del año ${sasha.nombre} pesa ${sasha.peso} kg`)

/* function aumentarDePeso(persona){
    return persona.peso+=200
}*/
const INCREMENTO_PESO=.200
const aumentarDePeso =persona => persona.peso += INCREMENTO_PESO
const bajarDePeso =persona => persona.peso -= INCREMENTO_PESO

for (let i =0; i<=365; i++){
    let random = Math.random()
    if (random <  0.25){
        aumentarDePeso(sasha)
    }else if (random < 0.5){
        bajarDePeso(sasha)
    }
}
console.log(`Al final del año ${sasha.nombre} pesa ${sasha.peso.toFixed(2)} kg`)