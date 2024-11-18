//Prototype
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Asgina una propiedad a todos los objetos de tipo Persona.
Persona.prototype.tel = '44332211';

let padre = new Persona('Juan','Marcelo','jmarcelo@gmail.com');
padre.tel = '11223344';
console.log(padre.tel);

let madre = new Persona('Angela','Gutierrez','agutierrez@gmail.com');
madre.tel = '66889900'
console.log(madre.tel);
