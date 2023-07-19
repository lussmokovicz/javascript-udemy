//BREAK e CONTINUE
//Funciona para os For e tudo o resto que é de repetição apresentado anteriormente.

const numeros =[1,2,3,4,5,6,7,8,9];
for (let numero of numeros){

    if(numero === 2){
        console.log("Pulei o número 2")
        continue; //No momento que ele encontra a palavra continue, ele pula para a próxima iteração do laço. Ele vem sempre antes da ação que você quer executar. Executa e vê como ele roda.
    }

    if(numero === 7){
        console.log("7 encontrado, saindo...")
        break; //O break quebra imediatamente a ação do laço, funciona da mesma forma que ocorria no switch.
    }
    console.log(numero);

}
//Iterações.
console.log("######################");

for (let i in numeros){
    let num = numeros[i];

    if (num === 3){
        console.log("Pulei o número 3");
        continue;
    }

    if (num === 6){
        console.log("6 encontrado, saindo...");
        break;
    }

    console.log(num)
}