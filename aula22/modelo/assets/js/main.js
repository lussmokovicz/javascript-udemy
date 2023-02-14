const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const peso = Number(document.querySelector('#peso').value);
    const altura = Number(document.querySelector('#altura').value);
    const IMC = peso / (altura ** 2);

    let res = document.querySelector('.res');
    res.innerHTML = ``;

    const p = document.createElement('p');

    if (!peso) {
        p.innerHTML = 'Peso inválido!';
        res.appendChild(p);
        p.classList.add('erro');
    } else if (!altura) {
        p.innerHTML = 'Altura inválida!';
        res.appendChild(p);
        p.classList.add('erro');
    } else {
        setResultado();
    }

    function setResultado() {
        const p = document.createElement('p');
        let res = document.querySelector('.res');
        res.innerHTML = ``;
        res.appendChild(p);
        p.classList.add('ok');

        const level = levelIMC(IMC);

        p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (${level}).`

        function levelIMC(IMC) {
            const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
            if (IMC >= 39.9) return nivel[5];
            if (IMC >= 34.9) return nivel[4];
            if (IMC >= 29.9) return nivel[3];
            if (IMC >= 24.9) return nivel[2];
            if (IMC >= 18.5) return nivel[1];
            if (IMC < 18.5) return nivel[0];
        }
        /*if (IMC <= 18.5) {
            p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (Abaixo do Peso)`;
        } else if (IMC > 18.5 && IMC <= 24.9) {
            p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (Peso Normal)`;
        } else if (IMC > 25 && IMC <= 29.9) {
            p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (Sobrepeso)`;
        } else if (IMC > 30 && IMC <= 34.9) {
            p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (Obesidade Grau 1)`;
        } else if (IMC > 35 && IMC <= 39.9) {
            p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (Obesidade Grau 2)`;
        } else {
            p.innerHTML = `Seu IMC é de ${IMC.toFixed(2)} (Obesidade Grau 3)`;
        } */
    }

});







