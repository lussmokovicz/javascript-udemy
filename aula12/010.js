//MAIS SOBRE STRINGS

let umaString = "Um \"texto\""; //Fica horrível? Sim, mas não tem o problema de 'texto' ser uma variável.

console.log(umaString);

//Cada String contém índices, isto é, a 'posição' do elemento (da letra) dentro do valor, tipo assim:
let segundaString = 'Dois texto'
//                   0123456789
//Se eu quiser chamar um elemento só de dentro da string, preciso indicar entre colchetes o índice dele:
console.log(segundaString[6]);
//Da mesma forma, funcionando do mesmo jeito, temos:
console.log(segundaString.charAt(6));
//Retorna o elemento referente ao índice.
//OBS: Se o índice escolhido for negativo ou ter um valor maior do que o alcance, então o retorno no console é UNDEFINED.