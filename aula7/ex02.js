const nome = 'Luana';
const sobrenome = 'Stanicheski Smokovicz';
let idade = 18;
let alturaEmM = 1.65;
let pesoEmKg = 52.5;
let IMC; 
const anoNascimento = 2023 - idade;
IMC = (pesoEmKg)/(alturaEmM*alturaEmM);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', pesoEmKg, 'kg e tem', alturaEmM, 'm de altura. Seu IMC é de', IMC, '.', nome, 'nasceu no ano de', anoNascimento, '.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoEmKg}kg e tem ${alturaEmM}m de altura. Seu IMC é, portanto, de ${IMC}. ${nome} ${sobrenome} nasceu no ano de ${anoNascimento}.`)