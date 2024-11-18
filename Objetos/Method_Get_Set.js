//Print Objects
let persona = {
    nombre: 'Carlos',
    apellido: 'Perez',
    email: 'cperez@gmail.com',
    edad: 25,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(Inlang){
        this.idioma = Inlang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = 'en';
console.log(persona.idioma);