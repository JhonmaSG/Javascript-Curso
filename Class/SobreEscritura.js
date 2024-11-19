// SobreEscritura 
class Persona{
    //Atributo de nuestra clase
    static contadorObjetosPersona = 0;

    //Atributo de nuestros objetos
    email = 'Valor default email'; 

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona)
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
console.log(persona1);

let empleado1 = new Empleado('Karla', 'Perez','Sistemas');
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//persona1.saludar(); No es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//atributos statics
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

//Las clases hijas tambien heredan los atributos staticos
console.log(Empleado.contadorObjetosPersona);

//atributo no estaticos
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);