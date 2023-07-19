//WHILE e DO WHILE - Estruturas de repetição
/*Com o FOR, se sabe quantas vezes o laço vai se repetir, porém com o while e do while, não se sabe ao certo o tamanho, não se sabe quantas vezes o laço vai ser executado */

const nome = 'Luana';
let i = 0;
while(i<= nome.length){
    console.log(i);
    i++;
}
//se usa o for pra esse tipo de brincadeirinha aqui

function random(min, max){
    const r = Math.random()*(max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min,max); //Esse aqui chama a função

while (rand !== 10){
    rand = random(1,50)
    console.log(rand);
}

//A hora que ele acha o número 10, encerra o laço

//While checa a condição e executa o laço

//Do While ele executa o código e depois chega a condição
console.log("############");

do{
    console.log(rand);
}while(rand !== 10);

//A hora que o número que ele achar for diferente de 10, ele encerra o laço


