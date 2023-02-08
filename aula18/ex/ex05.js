function enviar(){
    const res = document.getElementById('res');

    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('sobrenome');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    obj = {
        nome: nome.value,
        sobrenome:sobrenome.value,
        peso: peso.value,
        altura: altura.value
    };
    
    res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    console.log(pessoas);
    console.log('Foi enviado!');
    return pessoas.push(obj)
}

let pessoas = [];




/*let envio = enviar(document.getElementById('nome'),document.getElementById('sobrenome'),document.getElementById('peso'),document.getElementById('altura'), )

let res = document.getElementById('res');
res.innerHTML += `<p>${enviar()}</p>`;

function meuEscopo(){
    const
}

return {
    nome,
    sobrenome,
    peso,
    altura
}; */