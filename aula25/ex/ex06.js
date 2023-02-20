let data = new Date();
let text = document.querySelector('h1');
let diaDaSemana = data.getDay();
let dia = data.getDate()
let mês = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();


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
        break
}
if (hora >= 6 && hora < 12){
    document.body.style.backgroundImage = "linear-gradient(to bottom, #042959, #10386b, #1b487e, #245992, #2e6aa5, #3b79b2, #4888bf, #5697cc, #6aa6d5, #7eb6df, #92c5e8, #a7d5f2)";
} else if (hora <= 18){
    document.body.style.backgroundImage = "linear-gradient(to top, #3a400c, #484c10, #565913, #656617, #75731b, #807e21, #8b8828, #96932e, #9d9e38, #a5a942, #acb44c, #b3bf56)";
} else if (hora > 18){
    document.body.style.backgroundImage = "linear-gradient(to bottom, #000120, #0b1234, #191a49, #2b225d, #3f2972, #51307d, #623887, #744091, #824d95, #8f5a99, #9b689e, #a676a3)";
} else{
    document.body.style.backgroundColor = '#000120'
}
if (minutos < 10){
    minutos = `0${minutos}`;
}
if (hora < 10){
    hora = `0${hora}`;
}
console.log(`${diaDaSemana}, ${dia} de ${mês} de ${ano}, ${hora}:${minutos} `);

text.innerHTML = `${diaDaSemana}, ${dia} de ${mês} de ${ano}, ${hora}:${minutos} ` 
