const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');

const estilosBody =  getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
for (let p of paragrafos){
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
    p.style.borderRadius = '2px'
}