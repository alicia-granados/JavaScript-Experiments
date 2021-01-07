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
const DIAS_DEL_ANO=365
const INCREMENTO_PESO=.200
const aumentarDePeso =persona => persona.peso += INCREMENTO_PESO
const bajarDePeso =persona => persona.peso -= INCREMENTO_PESO
const comemucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META= sasha.peso -3
let dias = 0

while (sasha.peso> META){
    
    if( comemucho()){
        aumentarDePeso(sasha)
    }
    if(realizaDeporte()){
        bajarDePeso(sasha)
    }
    dias +=1
}

console.log(`Pasaron ${dias}  días hasta que ${sasha.nombre} adelgazó 3 kg`)