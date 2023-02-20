let data = new Date();
let diaDaSemana = data.getDay();
let dia = data.getDate()
let mês = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();

let text = document.querySelector('h1');

/*let container = document.getElementsByClassName('.container');
container.innerHTML = `${dia},` */

switch (diaDaSemana){
    case 0:
        diaDaSemana = 'Domingo';
        break;
    case 1:
        diaDaSemana = 'Segunda-feira';
        break;
    case 2:
        diaDaSemana = 'Terça-feira';
        break;
    case 3:
        diaDaSemana = 'Quarta-feira';
        break;
    case 4:
        diaDaSemana = 'Quinta-feira';
        break;
    case 5:
        diaDaSemana = 'Sexta-feira';
        break;
    case 6:
        diaDaSemana = 'Sábado';
        break;
}

switch (mês){
    case 0:
        mês = 'Janeiro';
        break;
    case 1:
        mês = 'Fevereiro';
        break;
    case 2:
        mês = 'Março';
        break;
    case 3:
        mês = 'Abril';
        break;
    case 4:
        mês = 'Maio';
        break;
    case 5:
        mês = 'Junho';
        break;
    case 6:
        mês = 'Julho';
        break;
    case 7:
        mês = 'Agosto';
        break;
    case 8:
        mês = 'Setembro';
        break;
    case 9:
        mês = 'Outubro';
        break;
    case 10:
        mês = 'Novembro';
        break;
    case 11:
        mês = 'Dezembro';
        break;
}

console.log(`${diaDaSemana}, ${dia} de ${mês} de ${ano}, ${hora}:${minutos} `);

text.innerHTML = `${diaDaSemana}, ${dia} de ${mês} de ${ano}, ${hora}:${minutos} `