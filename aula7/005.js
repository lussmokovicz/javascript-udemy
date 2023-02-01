/*
Sobre a nomenclatura dos identifiers de constantes:
- Não podem ser usadas palavras reservadas, isto é, palavras-chave da linguagem de programação;
- Precisam ter nomes significativos;
- Não podem iniciar com números;
- Não podem conter traços nem espaços;
- Utiliza-se camelCase, especialmente em nomenclaturas compostas;
- São caseSensitive, isto é, há diferença entre a variável com a e A, são duas constantes diferentes;
*/

const primeiroNumero = 5; // Number
const segundoNumero = 10; // Number
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado *3;
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);
console.log(primeiroNumero + segundoNumero); //O sinal de + vai somar, pois são dois Numbers
//se um número fosse uma string e outro fosse realmente um number:

const n1 = '5';
const n2 = 10;
const n3 = 20;
//Temos então uma concatenação:
console.log(n1 + n2); // Ficou 5 concatenado com 10

//mas se a primeira variável escrita  no console for um número e o seguinte for uma string:
console.log(n2+n3+n1); // Ficou 10+20 concatenado com 5
