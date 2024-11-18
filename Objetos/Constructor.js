//Funcion especial que trabaja con objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan','Marcelo','jmarcelo@gmail.com');
console.log(padre);

let madre = new Persona('Angela','Gutierrez','agutierrez@gmail.com');
console.log(madre);

padre.nombre = 'Carlos';

console.log(padre);
console.log(madre);