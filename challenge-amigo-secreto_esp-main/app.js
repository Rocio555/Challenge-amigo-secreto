// Array para guardar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    input.value = "";
    input.focus();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        resultado.innerHTML = `<li> No hay amigos disponibles para sortear.</li>`;
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong> </li>`;

    amigos.splice(indiceAleatorio, 1); 
    actualizarLista();

    if (amigos.length === 0) {
        resultado.innerHTML += `<li> Ya no quedan más nombres en la lista.</li>`;
    }
}




