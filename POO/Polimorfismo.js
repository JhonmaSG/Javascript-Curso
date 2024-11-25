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

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    //Se deja de primeras la clase de menor jerarquia
    //no responde a clases hijos
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo.departamento);
    }else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Juan', 2500);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

imprimir(empleado1);
imprimir(gerente1);
