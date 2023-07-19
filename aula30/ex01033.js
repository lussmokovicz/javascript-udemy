//Escreva uma função que recebe 2 números e retorne o maior deles.
function max(x,y){
    if(x>y){
        return x;
    } else{
        return y;
    }
} 

function max(x,y){
    if(x>y) return x;
    return y;
}

function max(x,y){
    return x > y ? y : y;
}


const max2 = (x, y) =>{
    return x>y ? x :y;
}; 

const max3 = (x, y) => x>y ? x : y;
console.log(max(1,9));
console.log(max2(1,9));
console.log(max3(1,9));