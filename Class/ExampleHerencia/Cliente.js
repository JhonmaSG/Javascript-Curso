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