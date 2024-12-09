const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const mouths = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const days = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = days[fecha.getDay()];
    let day = fecha.getDate();
    let mouth = mouths[fecha.getMonth()];
    let year = fecha.getFullYear();
    let fechaTexto = `${diaSemana},  ${day}  ${mouth} -  ${year}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //toogle: aplica <--> deshace
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(mostrarReloj, 1000);

window.mostrarReloj = mostrarReloj;