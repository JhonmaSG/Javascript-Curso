//Objects
let persona = {
    nombre: 'Juan',
    apellido: 'Marcelo',
    email: 'jmarcelo@gmail.com',
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

console.log(persona);
console.log(persona.nombreCompleto());

//new object: crea un nuevo object en memoria vacio.
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.apellido = 'Perez';
persona2.direccion = 'Saturno 15';
persona2.telefono = 123123123;

console.log(persona2.nombre);
console.log(persona2['apellido']);

//for in
for( nombrePropiedad in persona2){
    console.log(nombrePropiedad);
    console.log(persona2[nombrePropiedad]);
}