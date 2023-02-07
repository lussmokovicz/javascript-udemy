//OBJETOS
//São identificados com { }, segue:

const pessoa = {
    nome: 'Luana',
    sobrenome: 'Smokovicz',
    idade: 18
};

//Os itens são separados por vírgulas, exceto o último. Para acessar os valores:

console.log(pessoa.nome);

//Mas se eu precisar fazer uns 1.000 desses é MUITA coisa, então eu crio uma função que cria objetos :)

function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
//Ou:
/*function criaPessoa(nome, sobrenome, idade){
    return{
        nome,
        sobrenome,      //O JS já entende que ele se repete, que é tipo: nome: nome e tal.
        idade
    };
} */

//Daí, para armazenas:

const pessoa1 = criaPessoa('Luana', 'Smokovicz', 18);
const pessoa2 = criaPessoa('Mariana', 'Oliveira', 20 );
const pessoa3 = criaPessoa('Ana', 'Almeida', 22);
const pessoa4 = criaPessoa('Elisa', 'Faria', 12);
const pessoa5 = criaPessoa('Joana', 'Damasco', 16);
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);


//Funções dentro de objetos recebem o nome de métodos. Criaremos um então:

const pessoa0 = {
    nome: 'Valéria',
    sobrenome: 'Almeida',
    idade: 24,

    fala(){
        console.log(`A idade de ${this.nome} ${this.sobrenome} é de ${this.idade}`); //Se usa o THIS para referenciar uma propriedade dentro do objeto, dentro do contexto apresentado.
    },
    incrementoIdade(){
        this.idade++;
    }
    
};

pessoa0.fala(); //Para chamar o método.
pessoa0.incrementoIdade();
pessoa0.fala();