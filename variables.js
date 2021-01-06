
console.log('Hola mundo');//mostrar en consola

//declarar variable
var nombre;
nombre='Sacha';
var apellido='jnasdkcsd', edad=28;

console.log('Hola '+nombre+' '+apellido +'tengo '+ edad);//concatena String

/*string*/
var nonbreEnMayusculas= nombre.toUpperCase()
var appellidoEnMinusculas=apellido.toLowerCase()
var primeraLetradelNombre= nombre.charAt(0);//que letra tiene en las dif posiciones
var cantidadDeLetrasDelNombre=nombre.length;
var nombreCompleto= `${nombre} ${apellido}`;

/*NÚMEROS*/

var edad = 27
edad +=1

var peso =75
peso-=2

var sandwich = 1
peso=peso+sandwich
console.log(peso);

var precioVino =200.3
total =Math.round(precioVino*100*3/100)
var totalStr=total.toFixed(2)//tomar encuenta dos decimales y se cnvierte en string
var total2= parseFloat(totalStr)//transformar a decimal
console.log(total2);