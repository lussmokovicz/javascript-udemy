//OPERADORES

/*ARITMÉTICOS
+ - * / 
*/
const num1 = 5;
const num2 = 10;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);

/* INCREMENTO
++

DECREMENTO
--
*/

let contador = 1;
contador++; // contador -> 2
contador++; // contador -> 3
contador++; // contador -> 4
contador++; // contador -> 5
console.log(contador);

contador = 10;
--contador; // contador -> 9
--contador; // contador -> 8
--contador; // contador -> 7
console.log(contador);

/*INCREMENTO OU DECREMENTO DE MAIS DE 1 EM 1 */

let passo = 2;
let cont = 0;
cont = cont + passo;
console.log(cont);
cont = cont + passo;
console.log(cont);
cont = cont + passo;
console.log(cont); //Mas assim fica muito ruim, então:

cont += passo;
cont -= passo;

//NaN -> Not a Number
const n1 = 10;
const n2 = '5';
console.log(n1*n2); //Ele até resolve, pq o JS tenta ao máximo consertar as coisas para vc, mas:
const n3 = 'Luana';
console.log(n1*n3); //Ele não consegue resolver o problema

//Então, com parseInt() você consegue fazer com que o JS leia como número inteiro. Com parseFloat() há a conversão para número com ponto flutuante

const n4 = '5'; //É entendido como String
const n5 = parseInt('5'); //É entendido como Number Inteiro
const n6 = parseFloat('5.2'); //É entendido também como Number com Ponto Flutuante
const n7 = Number('89'); //É entendido como Number e ele se vira pra saber se é Inteiro ou com ponto flutuante



