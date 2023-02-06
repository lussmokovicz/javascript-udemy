//ARRAYS
/*São como listas, coleções de dados em uma só variável ou constante.
É ruim fazer algo do tipo:
const alunos = 'Luiz, Maria, José, André, Isabela, Ana, João, Andréia'
Tipo, você não consegue ter acesso a um dos dados ali, a um dos nomes, saca?
Mas com o uso de arrays, tu consegue.*/

const alunos = ['Luiz', 'Maria', 'José', 'André', 'Isabela', 'Ana', 'João', 'Andréia'];
console.log(alunos);

//As strings são indexadas:
const nome = 'Luiz Otávio';
//            012345678910
//Para acessar um elemento da string:
console.log(nome[5]);

//Os arrays também são indexados, mas não pelo valor, pelo elemento:
const nomes = ['Luiz', 'Maria', 'José', 'André', 'Isabela', 'Ana', 'João', 'Andréia'];
//               0        1        2       3         4        5       6        7
//Para acessar os elementos do array é simples:
console.log(nomes[2]);
console.log(nomes[7]);
console.log(nomes[5]);
//Para mudar um valor de dentro de um array, escreva o identifier da variável, coloque entre colchetes o índice e altere:

nomes[4] = 'Luana';

//Como saber a quantidade de valores dentro de um array? Segue:
console.log(nomes.length); //Ele conta o elemento, não o índice

//Para adicionar novos valores ao array:
nomes[8] = 'Lisa'; //ADICIONA um índice que ainda não existe ou
nomes[nomes.length] = 'Olívia'; //ADICIONA sempre no final, independentemente do tamanho do array ou
nomes.push('Mariana'); //ADICIONA o valor sem precisar do comprimento nem nada
nomes.unshift('Heloiza'); //ADICIONA o valor no ÍNDICE 0.
nomes.pop(); //ELIMINA o valor do FINAL

//Para salvar o valor removido:

const removido = nomes.pop();
console.log(removido);

nomes.shift(); //ELIMINA o valor do INÍCIO

//ELIMINANDO sem alterar a ordem e os índices:
delete nomes[3]; //Vira empty item - ITEM VAZIO

console.log(nomes);

//Fatiando array:

console.log(nomes.slice(4, 7)); 
console.log(nomes.slice(0, -3));

//Verificando algumas coisas:

console.log(typeof alunos); //Retorna Object
console.log(alunos instanceof Array); //Retorna true
