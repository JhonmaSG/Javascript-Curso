'use strict'
try{
    let x = 10;
    //miFuncion(); //Error por no definir
}catch(error){
    console.log(error);
}finally{
    console.log('Termina la revisión de errores')
}
console.log('continuamos...');