//TODOS são funções do objeto window (do DOM, sabe?)

//O alert dá apenas a opção 'OK' no navegador
alert('MENSAGEM');
window.alert('MENSAGEM2');
//O confirm dá a opção 'OK' e 'CANCEL' no navegador
confirm('CONFIRMAR');
window.confirm('CONFIRMAR2');
//O prompt permite que o usuário digite alguma coisa
prompt('Digite alguma coisa:');
window.prompt('Digite alguma coisa parte 2:');

/*Tem como capturar a informação da interação do usuário com as funções acima apresentadas
O alert não retorna nada, o valor é UNDEFINED;
O confirm retorna apenas TRUE e FALSE, já posso adicionar em uma variável ou constante esse resultado. Observe:
*/

const confirma = window.confirm('Deseja apagar a publicação?') 
/*Como o usuário vai ter as opções 'OK' e 'CANCELAR', retorna respectivamente true ou false, dependendo do caso.
OBS: dá pra usar o atalho: confirm() */

/*Com o prompt, se pode capturar o que o usuário digitar, armazenando em uma variável e podendo fazer o uso dela futuramente. Tu pode brincar com essa informação sabe? */

let num1 = prompt('Digite um número:');
let num2 = window.prompt('Digite outro número:');
alert(num1+num2);

/*Aí tu pode tacar um console.log ou sla um document.write, mas vc verá mais para frente.
OBS: TUDO, absolutamente TUDO o que o usuário digitar no prompt vai ser entendido como STRING. CUIDADO! 
Então, caso necessário, use parseInt(), parseFloat() ou Number().*/

let num3 = Number(prompt('Digite um número:'));
let num4 = Number(window.prompt('Digite outro número:'));
const resultado = num3+num4;
alert(`O resultado da operação foi ${resultado}`);



