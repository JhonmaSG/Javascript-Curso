//Funciones Flecha
//No se aplica el concepto de hosting
let miFuncion = function (){
    console.log('Saludos desde mi función');
}

// let miFuncionFlecha = () => {
//     console.log('Saludos desde mi funcion Flecha');
// }

//const miFuncionFlecha = () => console.log('Saludos desde mi funcion Flecha');

//miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función Flecha';
// }

const saludar = () => 'Saludos desde función Flecha';

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log( regresaObjeto());


const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');