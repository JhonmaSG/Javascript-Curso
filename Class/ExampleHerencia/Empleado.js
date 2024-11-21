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
