//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    
    inputAmigo.value = "";

    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];

        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }
    
    let resultado = document.getElementById("resultado");
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}

function reiniciarSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
