const div = document.querySelector('.paragrafos'); //pega apenas o primeiro parágrafo
const paragrafos = div.querySelectorAll('p'); //pega todos os parágrafos e faz um "nodeList"

const estilosBody =  getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)
for (let p of paragrafos){
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
    p.style.borderRadius = '2px'
}