//Exercício com FOR
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let { tag } = elementos[i];
    let e = document.createElement(tag)
    let { texto } = elementos[i];
    e.innerHTML = texto;
    div.appendChild(e); 
}
container.appendChild(div);
   /* const { tag, texto} = elementos[i];
    let e = document.createElement(tag);
    e.innerHTML = texto;
    div.appendChild(e); */

    /* const { tag, texto} = elementos[i];
    let e = document.createElement(tag);
    e.innerText = texto;
    div.appendChild(e); */

    /* const { tag, texto} = elementos[i];
    let e = document.createElement(tag);
    let t = document.createTextNode(texto);
    e.appendChild(t);
    div.appendChild(e); */
