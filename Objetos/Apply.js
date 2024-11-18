//Method Apply
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Santana'
}

//Uso de Call, para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Lic', '66778899'));

//Se pasa como un arreglo los argumentos del metodo nombreCompleto
let arreglo = ['Ing','1122121'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
//(persona2, arreglo) o persona2, ['Ing','465874']