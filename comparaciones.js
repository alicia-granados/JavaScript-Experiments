var x = 4,y = "4"

console.log(x == y )//true compara los valores

console.log(x === y) //false commpara valor y el mismo tipo

var sasha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

console.log(sasha == otraPersona) //false
console.log(sasha ===otraPersona) // false

var otraPersona2= sasha //pasa los mismos valores que tiene alacenada en la memoria
console.log(otraPersona2 == sasha) //true
console.log(otraPersona2 === sasha )//true

var otraPersona3 ={
    ...sasha
}
console.log(otraPersona3)

console.log(otraPersona3 == sasha) // false porque en otraPersona3 se crea otro objeto
