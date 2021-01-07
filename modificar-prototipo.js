function Persona2 (nombre,apellido,altura){

    this.nombre=nombre
    this.apellido= apellido
    this.altura = altura
  
}

Persona2.prototype.saludar= function () {
    console.log(`Hola, me llamo ${this.nombre}  ${this.apellido}`)
}

Persona2.prototype.soyAlto= function () {
    return this.altura > 1.8
}

let juan = new Persona2('Juan', 'Perez',1.72)
let ericka= new Persona2('Ericka', 'Luna',1.50)
let diana = new Persona2('Diana', 'Perez',1.90)

juan.saludar()

console.log(juan.soyAlto())

console.log(diana.soyAlto())
