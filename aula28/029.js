//FOR IN - ESTRUTURA DE REPETIÇÃO

//                 0       1      2 
const frutas = ['Pêra', 'Maçã', 'Uva'];
//Iterar com for:
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
for (let indice in frutas){
    console.log(frutas[indice]);
}

const pessoa = {
    nome: 'Luana',
    idade: 18,
    curso: 'Engenharia Aeroespacial'
}

for (let index in pessoa){
    console.log(index);
}
//Forma de acesso da chave:
console.log(pessoa.nome);
console.log(pessoa['nome']);
const chaveI = 'idade';
console.log(pessoa[chaveI]);

for ( let chave in pessoa){
    console.log(chave,':',pessoa[chave]);
}