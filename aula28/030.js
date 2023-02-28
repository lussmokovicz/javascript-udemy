//FOR OF - ESTRUTURA DE REPETIÇÃO

//            0123456789...
const nome = 'Luana Mariana';

//for (let i = 0; i < nome.length; i++){
//    console.log(nome[i]);
//}

//for (let indice in nome){
//    console.log(nome[indice]);
//}

for (let v of nome){
    console.log(v);
}

const nomeArray = ['Luana', 'Mariana'];

for (let valorArray of nomeArray){
    console.log(valorArray);
}

const nomeObjeto = {
    nome: 'Luana',
    sobrenome: 'Mariana'
}

//For Clássico -> Geralmente para iteráveis: Strings/Arrays
//For in -> Retorna o índice ou chave: Strings/Arrays/Objetos
//For of -> Retorna o valor em si: Iteráveis/Strings/Arrays
