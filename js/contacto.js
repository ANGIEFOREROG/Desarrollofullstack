window.addEventListener('load', function() {
    document.getElementById('formulario_contacto').style.display = 'none';
    
});


// ------------------------------------------------

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
       
        emailjs.sendForm('service_rv717m5', 'template_nx4msvx', this)
            .then(function() {
                alert("correo enviado exitosamente");
               console.log('SUCCESS!'); 
            }, function(error) {
                alert("Error en el envio del correo, intentelo nuevamente");
                console.log('FAILED...', error);
            });
    });
}


















// ------------------------------------------------


//declaracion variables
let contact_form = document.querySelector("ccontact_form");
let formulario_contacto = document.querySelector("formulario_contacto");




/*

    // Espera a que se cargue el DOM antes de ejecutar el código
    document.addEventListener('DOMContentLoaded', function () {
        // Función para enviar el formulario
        function enviarFormulario(event) {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    
        // Obtener los valores del formulario
        const nombre = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("phone").value;
        const asunto = document.getElementById("Asunto").value;
        const mensaje = document.getElementById("message").value;
    
        // Puedes realizar validaciones adicionales aquí antes de enviar los datos
    
        // Realizar la lógica de envío de datos, por ejemplo, usando fetch
        enviarDatosAlServidor(nombre, email, telefono, asunto, mensaje);
        }
    
        // Agregar el evento de envío al formulario
        const formularioContacto = document.querySelector('.contact-form form');
        formularioContacto.addEventListener('submit', enviarFormulario);
    });
    
    // Función para enviar datos al servidor (puedes modificar según tus necesidades)
    function enviarDatosAlServidor(nombre, email, telefono, asunto, mensaje) {
        // Puedes usar fetch para enviar los datos a tu servidor o API
        fetch('URL_DEL_ENDPOINT_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nombre,
            email,
            telefono,
            asunto,
            mensaje,
        }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario
            alert('¡Mensaje enviado con éxito!');
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
            // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.');
        });
    } //*/