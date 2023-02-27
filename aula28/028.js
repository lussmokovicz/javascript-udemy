//FOR - Clássico - Estrutura de Repetição
console.log('Linha1');
console.log('Linha2');
console.log('Linha3');
console.log('Linha4');
console.log('Linha5');

//Variável, condição e incrementação/decrementação:
for (let i = 0; i <= 5; i += 1){
    console.log(`${i}`);
}
for (let i = 20; i >= 10; i -= 1){
    console.log(`${i}`);
}
for (let i = 0; i <= 10; i++){
    const par = i%2 ===0 ? 'par' : 'ímpar';
    console.log(i, par);
}
//                0       1       2
const frutas = ['maça', 'pêra', 'uva'];
console.log(frutas.length);
for (let i = 0; i < frutas.length; i++){
    console.log(`índice ${i}`, frutas[i]);
}