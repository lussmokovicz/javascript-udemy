//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAYS)

let a = 'A'; // -> B
let b = 'B'; // -> C
let c = 'C'; // -> A

//A seguir, eis a ATRIBUIÇÃO VIA DESESTRUTURAÇÃO:
[a, b, c] = [1, 2, 3];

const numeros = [2, 4, 6];

[a, b, c] = numeros;

console.log(a, b , c);

/*O que aconteceu:
as variáveis a, b e c foram criadas, colocadas entre colchetes e igualadas a um array. 
Cada valor se relaciona com seu respectivo array. Assim:
a = 0, 1 = 0, logo a = 1
Entendeu? */
a = 'A';
b = 'B';
c = 'C';
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a,b,c);


//           0  1  2  3  4  5  6  7  8   -> ÍNDICES
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // -> VALORES
const primeiroNumero = num[0];
console.log(primeiroNumero);

const [firstNumber, secondNumber] = num;
console.log(firstNumber, secondNumber);
//console.log(resto); //O resto pega o ARRAY que sobra

//Para pular valores:

const [um, , , , , seis] = num; //Os espaços em branco não são identifiers válidos, logo não pegam nenhum valor do array.
console.log(um, seis);

//Arrays dentro de array:
//                    0          1         2
//                 0  1  2    0  1  2    0  1  2
const numArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numArray[1][2]); //Ele acessa o índice 1 do array geral, e depois o índice 2 do array com índice 1.
//Para atribuição via desestruturação:
const [, [, numtwo]] = numArray;
const [lista1, lista2, lista3] = numArray;

console.log(numtwo);
console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista2[0]);
