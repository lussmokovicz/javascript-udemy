//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)
const pessoa = {
    nome: 'Luana',
    idade: '18',
    educação: {
        curso: 'Engenharia Aeroespacial',
        IES: 'UFSC'
    }
};
//console.log(pessoa);
//const nome = pessoa.nome; //Atribuição normal
//console.log(nome);

const { nome } = pessoa;
console.log(nome);

//Para atribuir valor default caso a chave não exista no objeto e para renomear uma const:
const { nome: teste = 'Não existe'} = pessoa;

//Para extrair os valores da propriedade/objeto 'educação':

const {educação: {curso, IES}, educação} = pessoa;
console.log(curso, educação);

//Pegar o resto:

const {idade, ...resto} = pessoa;
console.log(idade, resto);


