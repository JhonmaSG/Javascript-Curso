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
        return `
            ${this._idPersona} 
            ${this._nombre} 
            ${this._apellido} 
            ${this._edad}`;
    }
}
