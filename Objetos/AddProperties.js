//Add properties Objects
let persona = {
    nombre: 'Juan',
    apellido: 'Marcelo',
    email: 'jmarcelo@gmail.com',
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona.tel = '5421536';
console.log(persona);

delete persona.tel;
console.log(persona);