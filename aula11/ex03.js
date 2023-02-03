let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/* const varATemp = varA; //Uma solução antiga.

varA = varB;
varB = varC;
varC = varATemp; */

[varA, varB, varC]=[varB, varC, varA]; //Uma solução moderna.

console.log(varA, varB, varC);
