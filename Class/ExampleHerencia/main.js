class Persona {

    static contadorPersonas = 0;

    constructor(nom, ape, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nom;
        this._apellido = ape;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get Nombre(){
        return this._nombre;
    }
    set Nombre(nom){
        this._nombre = nom;
    }
    get Apellido(){
        return this._apellido;
    }
    set Apellido(ape){
        this._apellido = ape;
    }
    get Edad(){
        return this._edad;
    }
    set Edad(edad){
        this._edad = edad;
    }
    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
}
class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nom, ape, edad, sueldo){
        super(nom, ape, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get Sueldo(){
        return this._sueldo;
    }
    set Sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}
class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nom, ape, edad, fechaRegistro){
        super(nom, ape, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get FechaRegistro(){
        return this._fechaRegistro;
    }
    set FechaRegistro(date){
        this._fechaRegistro = date;
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//prueba clase persona
let persona1 = new Persona('Juan','Marcelo', 20);
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log(persona2.toString());


let empleado1 = new Empleado('Cristian', 'Gallardo', 25, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Carla', 'Gomez', 25, 5000);
console.log(empleado2.toString());


let cliente1 = new Cliente('Laura', 'Quintero', 30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Maria', 'Lara', 38, new Date());
console.log(cliente2.toString());