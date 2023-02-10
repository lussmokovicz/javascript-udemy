//OPERADORES LÓGICOS
/*

&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO

*/

//Sobre o &&:
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

//Sobre o ||:
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

const usuario = 'Luana';
const senha = 123456;
//                      true                 true
const vaiLogar = usuario === 'Luana' && senha === 123456;
console.log(vaiLogar);

//Sobre o !:
console.log(!false); //Não falso
console.log(!true); //Não verdadeiro
console.log(!!false); //Não não falso -> falso
console.log(!!true); //Não não verdadeiro -> verdadeiro

