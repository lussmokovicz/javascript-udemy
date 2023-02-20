//MAIS DIFERENÇAS ENTRE VAR E LET/CONST:
//Ambos criam variáveis.

const verdadeira =  true;
let nome = 'Luana';
var nome2 = 'Luana';

/*
Let -> Não pode redeclarar, mas pode reatribuir. Let tem ESCOPO DE BLOCO {...}, então você pode redeclarar um mesmo let dentro e fora de uma function.




Var -> Pode redeclarar e reatribuir. Var só tem ESCOPO DE FUNÇÃO, isto é */

//Tenha atenção no ESCOPO!

function falaOi(){
    var sobrenome = 'Wonder';
    
    if (verdadeira){
        var sobrenome = 'Elizabeth';
        let nome = 'Lisa';
        console.log(nome, sobrenome);
    }
    console.log(sobrenome);
}

falaOi();


//Segue o hoisting:

console.log(idade);

var idade = '18';


console.log(nasc);

let nasc = '18/01/2005';
