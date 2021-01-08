class Persona2 {

    constructor(nombre,apellido,altura){

        this.nombre=nombre
        this.apellido= apellido
        this.altura = altura
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre}  ${this.apellido}`)
        if (fn){
            fn(this.nombre,this.apellido,false)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
  
}
//la Herencia se le llama extends
class Desarrollador extends Persona2{

    constructor (nombre,apellido,altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy un desarorrollador`)
        if (fn){
            fn(this.nombre,this.apellido,true)
        }
    }
    }


function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mira, no sabía que eras desarrollador`)
    }
}

let juan = new Persona2('Juan', 'Perez',1.72)
let ericka= new Persona2('Ericka', 'Luna',1.50)
let diana = new Persona2('Diana', 'Perez',1.90)
let edith= new Desarrollador('Edith', 'Salas',1.50)
let cata = new Desarrollador('Cata', 'Plata',1.90)

juan.saludar(responderSaludo)
diana.saludar()
cata.saludar()
ericka.saludar(responderSaludo)
edith.saludar(responderSaludo)