//OBJETO DATE - para datas

let data = new Date();
console.log(data.toString()); //Retorna a data em formato americano + horário + gmt
console.log(data.toDateString()); //Retorna a data em formato americano

data = new Date(0); //01/01/1970 Timestamp unix ou época unix p/ GMT 0

console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000;
data = new Date(0 + tresHoras);

console.log(data.toString()); //Agora sim tá bem certinho no timestamp unix

data = new Date(2020, 1, 13, 7, 10, 0, 500);
console.log(data.toString()); //Por incrível que pareça, fevereiro é o mês 1.

data = new Date('2020-02-20 20:20:59'); //Método dateString
console.log('Day', data.getDate()); //Mostra o dia
console.log('Mês', data.getMonth()); //Mostra o mês
console.log('Ano', data.getFullYear()); //Mostra o ano
console.log('Hora', data.getHours()); //Mostra a hora
console.log('Minuto', data.getMinutes()); //Mostra os minutos
console.log('Segundo', data.getSeconds()); //Mostra os segundos
console.log('Day of week', data.getDay()); //Mostra o dia da semana
console.log(data.toString());

console.log(Date.now()); //Pega o total de milissegundos de 01/01/1970 até agora.


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data1){
    //console.log(data1);
    const dia =  zeroAEsquerda(data1.getDate());
    const mes =  zeroAEsquerda(data1.getMonth() + 1);
    const ano =  zeroAEsquerda(data1.getFullYear());
    const hora =  zeroAEsquerda(data1.getHours());
    const minuto =  zeroAEsquerda(data1.getMinutes());
    const segundo =  zeroAEsquerda(data1.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

}


const data1 = new Date();
const dataBrasil = formataData(data1);
console.log(dataBrasil);



