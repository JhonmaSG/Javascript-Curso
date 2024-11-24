class Empleado{
    constructor(nombre,sueldo){
        //por fines de rapides, no se usara _ en los atributos
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

let empleado1 = new Empleado('Juan', 2500);
console.log(empleado1);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1);