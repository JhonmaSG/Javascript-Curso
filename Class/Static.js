// Ejemplo Static
class Persona{
    //Atributo de nuestra clase
    static contadorPersonas = 0;

    //Simular una constante
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }else{
            console.log('Se han superado el maximo de objetos permitidos');
        }
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nom){
        this._nombre = nom;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(ape){
        this._apellido = ape;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método Static');
    }
    static saludar2(persona){
        //static: Métodos que se asocian a la Clase, no a los objetos
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//Llamar al constructor de la clase padre
        //las clases hijas deben llamar a super
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(depar){
        this._departamento = depar;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Marcelo');
console.log(persona1.toString());


let empleado1 = new Empleado('Karla', 'Perez','Sistemas');
console.log(empleado1.toString())

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Karla2' , 'Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

//Verificar condición
let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Alejandro', 'Guzman');
let persona5 = new Persona('Laura', 'Mora');
console.log(persona5.toString());
