function Persona(){
    console.log('Me ejecutaron')
}

let sasha = new Persona()

function Persona2 (nombre,apellido){

    this.nombre=nombre
    this.apellido= apellido
  
}

Persona2.prototype.saludar= function () {
    console.log(`Hola, me llamo ${this.nombre}  ${this.apellido}`)
}

let juan = new Persona2('Juan', 'Perez')
let ericka= new Persona2('Ericka', 'Luna')
let diana = new Persona2('Diana', 'Perez')

console.log(ericka)
console.log(juan)

diana.saludar()
juan.saludar()


function Persona3(nombre,altura){
    this.nombre=nombre
    this.altura=altura
}

Persona3.prototype.medida = function () {
    if(this.altura>1.8){
        console.log(`${this.nombre} con ${this.altura} te consideras una persona alta porque mides más de 1.8 mts`)
    }else{
        console.log(`${this.nombre} con ${this.altura} te consideras baja porque mides menos de 1.8 mts`)
    }
    
}
let juan1 = new Persona3('Juan', 1.50)
let ericka1= new Persona3('Ericka', 1.80)
let diana1 = new Persona3('Diana', 1.90)

juan1.medida()
diana1.medida()
