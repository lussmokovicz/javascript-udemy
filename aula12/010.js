//MAIS SOBRE STRINGS

let umaString = "Um texto"; //Fica horrível? Sim, mas não tem o problema de 'texto' ser uma variável.
//               01234567
console.log(umaString);

//Cada String contém índices, isto é, a 'posição' do elemento (da letra) dentro do valor, tipo assim:
let segundaString = 'Dois texto'
//                   0123456789
//Se eu quiser chamar um elemento só de dentro da string, preciso indicar entre colchetes o índice dele:
console.log(segundaString[6]);
//OBS: Se o índice escolhido for negativo ou ter um valor maior do que o alcance, então o retorno no console é UNDEFINED.

//Da mesma forma, funcionando do mesmo jeito, temos:
console.log(segundaString.charAt(6));
//Retorna o elemento referente ao índice.
//OBS: Se o índice escolhido for negativo ou ter um valor maior do que o alcance, então o retorno no console é nada, tipo, nada mesmo, não tem NADA escrito.

//Sobre concatenação:
console.log(umaString.concat(' ', 'em', ' ', 'um', ' ', 'lindo',' ', 'dia', '.'));
//O mesmo que:
console.log(umaString.concat(' ', 'em um lindo dia.'));
//Mas, mais simples e fácil que isso:
console.log(umaString + ' em um lindo dia.');
//Mas, ainda mais simples e moderno:
console.log(`${umaString} em um lindo dia.`);



//Como saber em qual índice começa tal palavra da string? Segue:
console.log(umaString.indexOf('texto'));
//O indexOf inicia a análise no início da string, então vai da esquerda para a direita.
//Definindo um índice de início de análise:
console.log(umaString.indexOf('Um', 3)); //"Onde começa a palavra 'Um' a partir da análise dos elementos com início em 3?"
//Como começar a análise da posição de elementos e tal a partir do final da String ent? Segue:
console.log(umaString.lastIndexOf('t'));
//O lastIndexOf inicia a análise no final da string, então vai da direita para a esquerda.
//Definindo a partir de qual ele vai fazer a leitura:
console.log(umaString.lastIndexOf('t', 3));

//OBS: se retorna -1, significa que não tem tal elemento após tal posição de leitura.

//Para ter um array com os tipos de letras presentes em uma String:
console.log(umaString.match(/[a-z]/g));
//Uma coisa muito similar ao indexOf mas que aceita expressões regulares é:
console.log(umaString.search(/x/));
//Para substituir uma palavra ou letra ou sla oq:
console.log(umaString.replace('Um', 'Outro'));

let texto1 = 'O rato roeu a roupa do rei de Roma.';
console.log(texto1.replace(/r/, 'l')); //Muda apenas o primeiro 'r' que encontra. Com a flag 'g' ele muda todos os 'r' por 'l'.
console.log(texto1.replace(/r/g, 'l')); //Mudou de todos os 'r'.

//Como saber a quantidade de caracteres de uma string:
console.log(texto1.length); //Saiba que o índice da última letra/caractere diverge da contagem, isso porque é a QUANTIDADE, não o valor de índices != que são contados, então o índice da letra a de 'roma' é 33.

//Fatiar uma string:
console.log(texto1.slice(2, 5)); //Começa no índice 2 e termina no 5, sem incluir o elemento do índice 5.
console.log(texto1.slice(2, 6));
console.log(texto1.slice(-5, -1)); //A contagem negativa começa da direita para a esquerda.
console.log(texto1.substring(texto1.length -5));

//Dividir uma string:
console.log(texto1.split(' ')); //Aqui eu optei por dividir pelo espaço, mas eu posso dividir por qualquer coisa. Ele me retornará um array.
console.log(texto1.split('r')); //Taca-lhe o F8 e veja a loucura.
console.log(texto1.split(' ', 3)); //Aqui eu posso definir quantas vezes eu quero que ocorra essa divisão. Ele me retorna apenas os 3.

//Tranformar todos os caracteres em MAIÚSCULAS:
console.log(texto1.toUpperCase());
//Todos os caracteres em minúsculas:
console.log(texto1.toLowerCase());





