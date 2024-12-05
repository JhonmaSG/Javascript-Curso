let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion)
        resolved('Resolvio correcto');
    else
        rejected('Se produjo un error');
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
*/

/*
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));
*/

//Promises with setTimeout
let promesa = new Promise((resolved) => {
    //console.log('Inicio promesa');
    setTimeout( ()=> resolved('Saludos con promesa y tiemout'), 3000 );
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));

//Async indica que una finción regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));


//async con await: espera el resultado de una promesa

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolved => {
        resolved('Promesa con await');
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//Ejercicio de promesas, await, asyncs y setTomeout

async function functionConPromesaAwaitTimeout(){
    console.log('Inicio función');
    let miPromesa = new Promise(resolved => {
        setTimeout(()=> resolved('Promesa con await y TiemOut'),3000);
    });
    console.log(await miPromesa);
    console.log('Fin función');
}

functionConPromesaAwaitTimeout();