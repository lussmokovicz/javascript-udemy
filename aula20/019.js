//AVALIAÇÃO DE CURTO-CIRCUITO (SHORT-CIRCUIT)
/*
&& -> false && ... -> false
|| -> true || ... -> true
! */

//Retorna o último valor se tudo for verdadeiro:
console.log('Luana' && true && 'Joana');
//Retorna o valor que encontrar que é falso:
console.log('Luana' && 0 && 'Carolina');
//Retorna o primeiro falso se tudo (ou mais de 1) for falso:
console.log( 0 && null && 'Lisa');
//Retorna o primeiro valor se tudo (ou mais de 1) for verdadeiro:
console.log('Luana' || true || 'Joana');
console.log('Luana' || 0 || 'Carolina');
//Retorna o último valor falso se TUDO for falso
console.log(0 || null || false);

//Em JS, tudo pode ser avaliado com FALSE ou TRUE
/*
FALSY
  *false - literal
"" ou '' ou ``
null / undefined
NaN
 */

//Usando o && para ver o SHORT-CIRCUIT:

console.log('' && true && 'Maria');
console.log(null && true && 'Joaquim');
console.log(NaN && 'Mário' && true);

function falaOi(){
    return 'Oi'
}

let vaiExecutar = 'João';

console.log(vaiExecutar && falaOi());

//Usando o || para ver o SHORT-CIRCUIT:

console.log(0 || false || 'Lisa');

const corUsuario = null;
const corPadrão = corUsuario || 'black';
console.log(corPadrão);


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //Qual deles é mostrado no console?



