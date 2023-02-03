let num1 = 9.54678;
let num2 = Math.floor(num1); //Arredonda p/ baixo
console.log(num2);
num2 = Math.ceil(num1); //Arredonda p/ cima
console.log(num2); 
let num3 = 9.49;
num2 = Math.round(num3); //Arredonda p/ o inteiro mais próximo, ele mesmo analisa se deve ser p/ cima ou p/ baixo.
console.log(num2);

//Para achar o maior ou menor número de uma sequência de números
console.log(Math.max(1,2,3,4,5,10,-50,1500,200,74,63,-13,-30)); //Retorna o maior número
console.log(Math.min(1,2,3,4,5,10,-50,1500,200,74,63,-13,-30)); //Retorna o menor número

//Gerando um número aleatório
console.log(Math.random());
let aleatorio = Math.random() * (8-2) + 2;
console.log(aleatorio); //Mas se eu quiser arredondar esse número aleatório, temos:
console.log(Math.round(aleatorio));

//Valor de PI
console.log(Math.PI);
//Potenciação
console.log(Math.pow(3,2)); //Seria 3^2
console.log(3**2); //É a mesma coisa que o console anterior
//Radiciação
console.log(Math.sqrt(9)); //Seria raiz quadrada de 9
console.log(9 ** (1/2)); //Memsa coisa que o anterior
