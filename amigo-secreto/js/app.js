let amigos = [];


function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let nomeMinusculo = amigo.value.toLowerCase();

    if (amigos.includes(nomeMinusculo)) {
        alert('Esse nome já foi adicionado!');
        return;
    } else if (amigo.value == '') {
        alert('Digite um nome válido!');
        return;
    } else {
        let nomeMinusculo = amigo.value.toLowerCase();
        amigos.push(nomeMinusculo);
        if (lista.textContent == '') {
            lista.textContent = amigo.value;
        } else {
            lista.textContent = lista.textContent + ', ' + amigo.value;
        }
    }

    amigo.value = '';

    atualizaLista();
    atualizaSorteio();
}


function sortear() {
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    if (amigos.length < 4) {
        alert('Você precisa adicionar pelo menos 4 amigos para sortear!');
        return;
    }
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizaLista();
    atualizaSorteio();
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizaSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizaLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('li');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
