//OPERADOR TERNÁRIO

/* ? : */

/*Imagina que você tem um site onde tem os normais e  os vips, e tem uma pontuação e cada grau é uma flag; */

const pontuacaoUsuario = 999;

//Se o usuário tem 1000 ou mais pontos, ele é vip. Se tem menos, é um usuário normal.

/* 

if (pontuacaoUsuario >= 1000){
    console.log('vip');
} else {
    console.log('normal');
} 

*/

//Eu posso simplesmente transformar esse if e esse else nisso aqui:
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

//Basicamente:
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

