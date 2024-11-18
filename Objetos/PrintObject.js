//Print Objects
let persona = {
    nombre: 'Juan',
    apellido: 'Marcelo',
    email: 'jmarcelo@gmail.com',
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//Con for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Con Object con resultado en un Array
let personaArray = Object.values(persona);
console.log(personaArray);

//Cadena JSON
let personaString = JSON.stringify(persona);
console.log(personaString);