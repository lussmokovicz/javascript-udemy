//Valores PRIMITIVOS e Valores por REFERÊNCIA
/*Primitivos(imutáveis): String, Number, Boolean, Undefined, Null...(bigint e symbol) */

//Pera pera pera, mas como assim IMUTÁVEIS? Se liga:
let nome = 'Luana';
nome[0] = 'R';
console.log(nome[0]);

//Ele não mudou o L para R, entendeu? Por isso é imutável. No array eu consigo mudar a STRING referente ao índice, mas na constante/variável, eu não consigo mudar o ELEMENTO referente ao índice da string.

let a = 'A';
let b = a; //***CÓPIA de let a (ambas são independentes, isto é, qualquer que seja o valor que a assumir, b permanece A). Ou melhor: não apontam para um mesmo local da memória. São independentes.***
console.log(a, b);
a = 'C';
console.log(a, b);

/*Referência(mutáveis): Array, Object, Function */

//Pera pera pera, mas como assim MUTÁVEIS? Se liga:
let c = ['Joana', 'Ana', 'Mariana'];
let d = c; //***Não estou copiando. d aponta para o mesmo local que c faz na memória. Foi feita uma linkagem.***
let e = [...c]; //***Aqui eu estou literalmente COPIANDO. e se torna independente das alterações em c.***
console.log(c, d); //Se eu alterar um elemento de uma das variáveis, a outra também é afetada. Observe:

c[1] = 'LuanaCarolina';
console.log(c, d); //Dá um F8 aí e veja a surpresa.
console.log(e);

//Com object fica assim:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Almeida'
};
const pessoa1 = pessoa; //Valores passados por REFERÊNCIA.
const pessoa2 = {...pessoa}; //Aqui COPIA.

console.log(pessoa1);

pessoa.nome = 'Valéria';
console.log(pessoa1);
console.log(pessoa2); //Continua com 'Luiz'.


