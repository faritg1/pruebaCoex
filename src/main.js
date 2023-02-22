const inicio = document.getElementById('inicio');
const cliente = document.getElementById('cliente');
const creditos = document.getElementById('creditos');
const almacenandoCreditos = document.querySelector('.almacenandoCreditos');
const titulo = document.querySelector('.titulo');
const formCliente = document.querySelector('.formCliente');

formCliente.style.visibility = 'collapse';
inicio.addEventListener('click', () => {
    titulo.innerHTML = 'Inicio';
    almacenandoCreditos.style.visibility = 'visible';
    formCliente.style.visibility = 'collapse';
});

cliente.addEventListener('click', () => {
    titulo.innerHTML = 'Clientes';
    almacenandoCreditos.style.visibility = 'collapse';
    formCliente.style.visibility = 'visible';
});
