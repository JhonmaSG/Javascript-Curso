//Objects
let x = 10;
console.log(x.lenght);

let persona = {
    nombre: 'Juan',
    apellido: 'Marcelo',
    email: 'jmarcelo@gmail.com',
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }/*,
    miFuncion: function(){

    }*/
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona);

console.log(persona.nombreCompleto());
