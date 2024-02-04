//TRATANDO E LANÇANDO ERROS (TRY, CATCH, THROW)

//console.log(naoExisto); //O console indica q ele n existe quando roda o código


try{ //-> Serve para códigos com potencial de erro
    console.log(naoExisto2); 
} catch(erro) { //aqui recebe o erro
    console.log('naoExisto não existe'); //Exibe para o usuário que há erro 
}


function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números'); //com o new Error aparece o erro do JS (é uma função construtora)
    }
    return x + y;
}
try{
console.log(soma(1, 2));
console.log(soma('1', 2)); //Tem uma string aqui
} catch(error){ //Se relaciona com o Error ali em cima
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.')
}