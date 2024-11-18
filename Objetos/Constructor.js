//Funcion especial que trabaja con objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan','Marcelo','jmarcelo@gmail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Angela','Gutierrez','agutierrez@gmail.com');
console.log(madre.nombreCompleto());

padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);

//Formas de crear un objeto en base al constructor
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola'); //No es recomendada
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};