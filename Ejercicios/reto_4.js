/*
Reference: https://adventjs.dev/es/challenges/2024/

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
Ejemplos:

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
*/
const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

function organizeShoes(shoes) {
    const izqShoes = {};
    const derShoes = {};

    //conteo de botas izq y der
    shoes.forEach(shoe => {
        if(shoe.type === 'I'){
            izqShoes[shoe.size] = (izqShoes[shoe.size] || 0) + 1;
        } else if (shoe.type === 'R'){
            derShoes[shoe.size] = (derShoes[shoe.size] || 0) + 1;
        }
    });

    const pares = []

    // Encontrar pares
    for (const size in derShoes){
        if(izqShoes[size]) {
            const conteoPar = Math.min(derShoes[size], izqShoes[size]);
            for(let i = 0; i < conteoPar; i++){
                pares.push(parseInt(size));
            }
        }
    }

    return pares;
}

console.log(organizeShoes(shoes));