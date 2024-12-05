//setInterval : llama n tiempo a la funcion call back

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000); //1 seg