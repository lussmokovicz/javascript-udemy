//SWITCH AND CASE

const data = new Date('2005-01-18 09:12:00');
const diaSemana = data.getDay();
console.log(diaSemana);

//Eu posso indicar o dia da semana para o usuário dessa forma: 
let diaSemanaTexto;

/*if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} else{
    diaSemanaTexto = '';
}*/

//USANDO SWITCH

/* switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default: //Valor padrão, é como se fosse o else do if.
        diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto); */

//COLOCANDO EM UMA FUNÇÃO:

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }

}

let diaSemanaTexto1 = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto1);


