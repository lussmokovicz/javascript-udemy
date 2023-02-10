//IF, ELSE IF e ELSE - parte 2.

//Se (numero >= 0 && numero <= 5) = true, faça {bloco de código}
//Se não, se, faça {outro bloco de código}
//Se não, não faça {nenhum código acima}

const numero = 10;

if (numero >= 0 && numero <= 5){
    console.log('Sim, este número está entre 0 e 5');
} else if(numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8');
} else if(numero >= 9 && numero <= 11 ){
    console.log('O número está entre 9 e 11');
}else {
    console.log('O número não está entre 0 e 11.');
}
