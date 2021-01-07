function heredaDe(prototipohijo, prototipopadre){
    let fn = function (){}
    fn.prototype = prototipopadre.prototype
    prototipohijo.prototype = new fn
    prototipohijo.prototype.constructor = prototipohijo
}

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

function Desarrollador(nombre,apellido){
    this.nombre = nombre
    this.apellido= apellido
}

heredaDe(Desarrollador,Persona2)

Desarrollador.prototype.saludar= function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarorrollador`)
}


let juan = new Persona2('Juan', 'Perez',1.72)
let ericka= new Persona2('Ericka', 'Luna',1.50)
let diana = new Persona2('Diana', 'Perez',1.90)
let edith= new Desarrollador('Edith', 'Salas',1.50)
let cata = new Desarrollador('Cata', 'Plata',1.90)

juan.saludar()
console.log(juan.soyAlto())

edith.saludar()
console.log(cata.soyAlto())

