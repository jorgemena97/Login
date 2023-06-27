const formulario = document.getElementById('logiin')
const correoInput = document.getElementById('correo')
const contraseñaInput = document.getElementByIdc('password')
const botonIniciosesion = document.getElementById('button')

//agregar un evento de escucha al boton de iniciar sesion

botonIniciosesion.addEventListener(' click', function (event) {
    event.preventDefault(); // evitar que el from se envie automaticamente

    if (!
        validarCorreo(correoinput, value)) {
        mostrarError(correoinput, 'por favor ingrese un correovalido')
    } else if (contraseñaInput.value ===)
})

// funcion para validar formato de correo electronico 

function validarCorreo(correo) {
    // utilizar expresion para verificar si el correo tiene un formato valido
    const regeCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i
    return regeCorreo.test(correo)

}

// funcion para mostrar error 

function mostrarError(input, mensaje) {
    const errorMensaje = document.createElement('p')// aqui nos crea un elemento de html <p> donde se va alamcenar en caso error 
    errorMensaje.className = 'error-mensaje';



}

function limpiarError() {
    const contenedorInput = this.parentElement;
    const errorMensaje = contenedorInput.querySelector('
    error - mensaje');

    if (errorMensaje) {
        contenedorInput.removeChild(errorMensaje);
        contenedorInput.class
    }
}