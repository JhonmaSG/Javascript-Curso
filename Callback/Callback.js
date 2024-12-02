function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion1();
miFuncion2();

//Función de tipo Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);
