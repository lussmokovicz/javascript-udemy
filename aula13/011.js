//Numbers

let num1 = 1; //Inteiro
let num2 = 2.75; //Número com ponto flutuante
console.log(num1+num2); //Vai somar

//Para transformar um Number em String:
console.log(num1.toString()+num2); //Vai concatenar
console.log(typeof(num1)); //Mantém o tipo Number em num1

//Para representação Binária:
let num3 = 1500;
console.log(num3.toString(2));

//Para fixar casas decimais
let num4 = 3;
console.log((num1/num4).toFixed(4));

//Para saber se o valor da variável é um inteiro
console.log(Number.isInteger(num2));

//Para saber se o valor da variável é um NaN
console.log(Number.isNaN(num3));

//IEEE 754-2008
let num5 = 0.7;
let num6 = 0.1;
console.log(num5+num6); //Se liga na palhaçada, taca-lhe um F8

//Para resolver, taca um parseFloat e um toFixed

num5 += num6;
num5 = parseFloat(num5.toFixed(2));

console.log(num5);

num5 += num6; //0.8
num5 += num6; //0.9
num5 += num6; //1.0

console.log(num5); 

//Outra maneira de resolver o problema do F8

let num7 = 0.7;
let num8 = 0.1;

num7 = ((num7 *100)+(num8 * 100))/100
console.log(num7);