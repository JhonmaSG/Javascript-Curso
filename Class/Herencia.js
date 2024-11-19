// Herencia 
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
        return this._nombre + ' ' + this._apellido;
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

}

let persona1 = new Persona('Juan', 'Marcelo');
console.log(persona1);

let empleado1 = new Empleado('Karla', 'Perez','Sistemas');
console.log(empleado1.nombreCompleto());
