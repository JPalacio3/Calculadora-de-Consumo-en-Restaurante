let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const btnGuardarCliente = document.querySelector( '#guardar-cliente' );
btnGuardarCliente.addEventListener( 'click', guardarCliente );

function guardarCliente() {
    const mesa = document.querySelector( '#mesa' ).value;
    const hora = document.querySelector( '#hora' ).value;

    // Revisar si hay campos vacios
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );
    if ( camposVacios ) {
        // Verificar si ya hay una alerta
        const existeAlerta = document.querySelector( '.invalid-feedback' );

        if ( !existeAlerta ) {
            const alerta = document.createElement( 'DIV' );
            alerta.classList.add( 'invalid-feedback', 'd-block', 'text-center' );
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector( '.modal-body form' ).appendChild( alerta );

            setTimeout( () => {
                alerta.remove();
            }, 1500 );
        }
        return;
    }

    cliente = { ...cliente, mesa, hora };

    // Asignar datos del formulario al ciente


    // Ocultar modal
    const modalFormulario = document.querySelector( '#formulario' );
    const modalBootstrap = bootstrap.Modal.getInstance( modalFormulario );
    modalBootstrap.hide();



    console.log( cliente )



}

