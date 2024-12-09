function calcular(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let select = forma['operaciones'];
  let operacion = select.value;
  let resultado;
  switch(operacion){
      case 'Sumar':
          resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
          break;
      case 'Restar':
          resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
          break;
      case 'Multiplicar':
          resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
          break;
      case 'Dividir':
          if(parseInt(operandoB.value) === 0){
              resultado = "No se puede dividir por cero";
          } else {
              resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
          }
          break;
      default:
          resultado = 'Operación no válida';
          break;
  }
  if(isNaN(resultado)){
    resultado = 'No hay números en los campos';
  }
  document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

