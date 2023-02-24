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
const crearCliente = document.querySelector('.crearCliente');
const contenedorNuevoCliente = document.querySelector('.contenedorNuevoCliente');
const contenedorCredito = document.querySelector('.contenedorCredito');

tableCliente.style.visibility = 'collapse';
contenedorFormulario.style.visibility = 'collapse';
contenedorNuevoCliente.style.visibility = 'collapse';
tableCliente.style.height = '0';
contenedorFormulario.style.height = '0';
contenedorNuevoCliente.style.height = '0';
contenedorCredito.style.height = '0';
contenedorCredito.style.visibility = 'collapse';

inicio.addEventListener('click', () => {
    titulo.innerHTML = 'Inicio';
    almacenandoCreditos.style.visibility = 'visible';
    almacenandoCreditos.style.height = '50vh'
    tableCliente.style.visibility = 'collapse';
    contenedorNuevoCliente.style.visibility = 'collapse';
    tableCliente.style.height = '0';
    contenedorFormulario.style.height = '0';
    contenedorNuevoCliente.style.height = '0';
    contenedorCredito.style.visibility = 'collapse';
});

cliente.addEventListener('click', () => {
    titulo.innerHTML = 'Clientes';
    almacenandoCreditos.style.visibility = 'collapse';
    almacenandoCreditos.style.height = '0'
    tableCliente.style.visibility = 'visible';
    tableCliente.style.height = 'auto';
    contenedorNuevoCliente.style.visibility = 'collapse';
    contenedorCredito.style.visibility = 'collapse';
});

buttonActualizar.addEventListener('click', () => {
    titulo.innerHTML = 'Detalles del cliente';
    tableCliente.style.visibility = 'collapse';
    contenedorAdmin.style.visibility = 'collapse';
    contenedorAdmin.style.width = '0';
    contenedorFormulario.style.visibility = 'visible';
    contenedorCredito.style.visibility = 'collapse';
});

crearCliente.addEventListener('click', () => {
    titulo.innerHTML = 'Nuevo cliente';
    contenedorNuevoCliente.style.visibility = 'visible';
    tableCliente.style.visibility = 'collapse';
    contenedorCredito.style.visibility = 'collapse';
});

creditos.addEventListener('click', () => {
    titulo.innerHTML = 'Nuevo crédito';
    contenedorCredito.style.visibility = 'visible';
    almacenandoCreditos.style.visibility = 'collapse';
    tableCliente.style.visibility = 'collapse';
    contenedorNuevoCliente.style.visibility = 'collapse';
    contenedorCredito.style.height = 'auto';
    almacenandoCreditos.style.height = '0';
})

/* cerrarSesion.addEventListener('click', () => {
    setTimeout( () => {
        advertencia.innerHTML = 'Soy el admin';
    }, 1000)
})  */


/*Creando base de datos con js*/

let listaClientes = [];

const objClientes = {
    nombre: '',
    apellido: '',
    cc: '',
    direccion: '',
    telefono: '',
    cupoTotal: '',
    cupoDisponible: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreCli = document.querySelector('#nombre');
const apellidoCli = document.querySelector('#apellido');
const ccCli = document.querySelector('#cc');
const direccionCli = document.querySelector('#direccion');
const telefonoCli = document.querySelector('#telefono');
const cupoTotalCli = document.querySelector('#cupoTotal');
const cupoDisponibleCli = document.querySelector('#cupoDisponible');
const diaGracia = document.querySelector('#diaGracia');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validar);

function showError(message) {
    const alert = document.createElement('p');
    alert.classList.add('alert-message');
    alert.innerHTML = message;

    formulario.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

function validar(e) {
    e.preventDefault();
    if (nombreCli.value === '' || apellidoCli.value === '') {
        showError('¡Vacío!');
        return;
    }

    if (editando) {
        //editandoCliente();
        editando = false;
    } else {
        objClientes.nombre = nombreCli.value;
        objClientes.apellido = apellidoCli.value;
        objClientes.cc = ccCli.value;
        objClientes.direccion = direccionCli.value;
        objClientes.telefono = telefonoCli.value;
        objClientes.cupoTotal = cupoTotalCli.value;
        objClientes.cupoDisponible = cupoDisponibleCli.value;

        agregarCliente();
    }
}

function agregarCliente() {
    listaClientes.push({ ...objClientes });

    mostrarCliente();
}

function mostrarCliente() {
    const tableClientes = document.querySelector('.div-empleados');

    listaClientes.forEach(cliente => {
        const { nombre, apellido, cc, direccion, telefono, cupoTotal, cupoDisponible } = cliente;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${apellido} - ${cc} - ${direccion} - ${telefono} - ${cupoTotal} - ${cupoDisponible}`

        parrafo.dataset.cc = cc;

        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarCliente(cliente);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBotn = document.createElement('button');
        //eliminarBotn.onclick = () => eliminarCliente(cc);
        eliminarBotn.textContent = 'Eliminar';
        eliminarBotn.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBotn);

        const hr = document.createElement('hr');

        tableClientes.appendChild(parrafo);
        tableClientes.appendChild(hr);
    });
}


