// Class = plantillas
//Las clases no aplican el concepto de hoisting (crear un objeto antes de la classe)
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
}

let persona1 = new Persona('Juan', 'Marcelo');
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
