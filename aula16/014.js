//FUNÇÃO

function saudacao(){
    console.log('Bom dia!');
}
saudacao();

//Com o uso de parâmetro (funciona como se fosse uma variável)
function saudacao2(nome){
    console.log(`Bom dia ${nome}!`);
}
saudacao2('Luana');

//Como retornar um valor com função:

function saudacao3(nome){
    console.log(`Bom dia ${nome}!`);
    return 'ok'
}
const variavel = saudacao3('Luana');
console.log(variavel); //Ele me retorna um 'ok'.
//Mas melhor ainda:

function saudacao4(nome){
    return (`Bom dia ${nome}!`)
}
const variavel2 = saudacao4('Luana');
console.log(variavel2); //Entendeu? Legal ne.

function soma(x, y){
    const resultado = x + y;
    return resultado
}
console.log(soma(2,1));

//O que está dentro do bloco da função está protegido, ou seja, fora das chaves eu não consigo acessar as informações, os dados e tal, tipo:
//console.log(resultado); //Vai dar ERRO, pq a const tá protegida pelo escopo da função, mass...
const resultado = soma(2,2); //Apesar de não poder ser redeclarada ou reatribuída, ele funciona, pois no escopo 'global' a const ainda não existe.
console.log(resultado);

//RETURN em uma função faz com que o motor do JS pare de executar as ações da função.
//Ajustando um valor padrão no parâmetro da função, caso não seja indicado na chamada da função:
function identifier(x = 1, y = 2){
    const res = x + y;
    return res
}
const res = identifier();
console.log(res);

//Outra forma de declarar função:

const raiz = function(n){
    return n ** 0.5
};
console.log(raiz(100));

//Com arrow functions:

const raiz3 = (n) =>{
    return n ** (1/3)
};

console.log(raiz3(8));
