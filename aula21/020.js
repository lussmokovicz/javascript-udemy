//IF, ELSE IF e ELSE - parte 1.

const hora = 22;

/*if (condição){
    oq ele faz
} else //caso a condição não seja verdadeira {
    ele faz outra coisa
} */

if (hora >= 0 && hora <= 11){
    console.log('Bom dia!');
} else if ( hora >= 12 && hora <=17){
    console.log('Boa tarde!');
} else if ( hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else {
    console.log('Olá!')
}

//O IF pode ser usado sozinho
//ELSE IF não pode ser executado sozinho - Podem ter VÁRIOS no sistema
//Só posso ter 1 ELSE na checagem

const tenhoGrana = true;

if (tenhoGrana){
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}