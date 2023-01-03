
// referencias del html

const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');
const socket = io();

socket.on('connect', () => {
    console.log('Conectado...')

    lbloffline.style.display = 'none';
    lblonline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Disconnect...')
    lbloffline.style.display = '';
    lblonline.style.display = 'none';
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
        msg: mensaje,
        id: '123',
        fecha: Date.now()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server', { id })
    });
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})