const inicio = document.getElementById('inicio');
const cliente = document.getElementById('cliente');
const creditos = document.getElementById('creditos');
const almacenandoCreditos = document.querySelector('.almacenandoCreditos');
const contenedorAdmin = document.querySelector('.contenedorAdmin');
const titulo = document.querySelector('.titulo');
const tableCliente = document.querySelector('.tableCliente');
const buttonActualizar = document.querySelector('.buttonActualizar');
const contenedorMenu = document.querySelector('.contenedorMenu');
const contenedorFormulario = document.querySelector('.contenedorFormulario');
const cerrarSesion = document.querySelector('.cerrar');
const advertencia = document.querySelector('.advertencia');

tableCliente.style.visibility = 'collapse';
contenedorFormulario.style.visibility = 'collapse';


inicio.addEventListener('click', () => {
    titulo.innerHTML = 'Inicio';
    almacenandoCreditos.style.visibility = 'visible';
    almacenandoCreditos.style.height = '50vh'
    tableCliente.style.visibility = 'collapse';
});

cliente.addEventListener('click', () => {
    titulo.innerHTML = 'Clientes';
    almacenandoCreditos.style.visibility = 'collapse';
    almacenandoCreditos.style.height = '0'
    tableCliente.style.visibility = '50vh'
    tableCliente.style.visibility = 'visible';
});

buttonActualizar.addEventListener('click', () => {
    titulo.innerHTML = 'Detalles del cliente';
    tableCliente.style.visibility = 'collapse';
    contenedorAdmin.style.visibility = 'collapse';
    contenedorAdmin.style.width = '0';
    contenedorMenu.style.height = '100vw';
    contenedorFormulario.style.visibility = 'visible';
});

/* cerrarSesion.addEventListener('click', () => {
    setTimeout( () => {
        advertencia.innerHTML = 'Soy el admin';
    }, 1000)
}) */
