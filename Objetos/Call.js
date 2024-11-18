//Method Call
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Santana'
}

//Uso de Call, para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Lic','4565987'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '11223344'));