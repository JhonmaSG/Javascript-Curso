// Hoisting: utilizar una variable y posteriormente despues de haber sido utilizada, podemos declararla

//base
var x;
x = 10;
console.log(x);

//Aplicacion de hoisting con var
y = 5;
console.log(y);
var y;

//ahora con let, no aplica
z = 30;
console.log(z);
let z;