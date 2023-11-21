//document.getElementById("btn__iniciar-sesion").addEventListener("click",iniciarSesion());
//document.getElementById("btn__registrarse").addEventListener("click",register);
window.addEventListener('load', function() {
    document.getElementById('formulario__login').style.display = 'none';
    document.getElementById('formulario__register').style.display = 'none';
});


//declaracion variables
let contenedor_login_register = document.querySelector("contenedor__login-register");
let formulario_login = document.querySelector("formulario__login");
let formulario_register = document.querySelector("formulario__register");
let caja_trasera_login = document.querySelector("caja__trasera-login");
let caja_trasera_register = document.querySelector("caja__trasera-register");

function iniciaSesion(){
    
    
    document.getElementById('formulario__login').style.display = 'block';
    document.getElementById('formulario__register').style.display = 'none';

    
    formulario_register.style.display ="none";
    contenedor_login_register.style.left = "10px";
    //formulario_login.style.display ="block";
    
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity= "0";

}
function Entrar(){
    const usuario = document.getElementById("correo_electronico1").value;
    const contrasena = document.getElementById("contrasena1").value;
    if(usuario!='' && contrasena!=''){
        if (localStorage){ // condicion para saber si tenemos creado algo en cache

            if(localStorage.getItem('usuarios') !== undefined && localStorage.getItem('usuarios')){
                let listadousuarios = JSON.parse(localStorage.getItem("usuarios"));
                
                let siExiste = false;
                let validacioncontra = false;
                for (itemUsuario of listadousuarios) {
                    if (itemUsuario.usuario == usuario){
                        siExiste = true;
                        if( itemUsuario.contrasena == contrasena){
                            validacioncontra = true;
                        }
                    }
                }
                if (siExiste == false){
                    alert(" El Usuario no existe"); 
                }else{
                    if(validacioncontra == true){
                        alert("Bienvenido");
                    }else{ 
                        alert("Contraseña incorrecta");
                        
                    }
                    
                }
                
            } else { // si existe el local storage pero no tiene usuarios, agrego el usuario
                alert("Usuario no Existe"); 
            }
        } else { // no existe el localstorage lo creo
            
            alert("Usuario no existe"); 
        }
        
    }else{
        alert("ingrese usuario y contraseña");
    }

}
                

// Función para guardar los datos del formulario en el LocalStorage
// Función para guardar los datos del formulario de inicio de sesión en el LocalStorage

function register(){

    document.getElementById('formulario__login').style.display = 'none';
    document.getElementById('formulario__register').style.display = 'block';

    formulario_register.style.display ="block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display ="none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity= "1";

}

function registrar(){
    const nombreCompleto = document.getElementById("nombre_completo").value;
    const correoElectronico = document.getElementById("correo_electronico").value;
    const for_usuario = document.getElementById("usuario").value;
    const for_contrasena = document.getElementById("contrasena").value;
    if(nombreCompleto!='' && correoElectronico!=''&& usuario!='' && contrasena!=''){
        if (localStorage){ // condicion para saber si tenemos creado algo en cache

            if(localStorage.getItem('usuarios') !== undefined && localStorage.getItem('usuarios')){
                let listadousuarios = JSON.parse(localStorage.getItem("usuarios"));
                
                let siExiste = false;
                for (itemUsuario of listadousuarios) {
                    if (itemUsuario.usuario == for_usuario){
                        siExiste = true;
                    }
                }
                if (siExiste == false){
                    listadousuarios.push({ nombre:nombreCompleto, correo: correoElectronico, usuario:for_usuario, contrasena:for_contrasena });
                    localStorage.setItem('usuarios', JSON.stringify(listadousuarios));
                    alert("Usuario registrado correctamente:"); 
                }else{
                    alert("El usuario ya existe");
                }
                // se realiza el localStorage//
                localStorage.setItem('usuarios', JSON.stringify(listadousuarios));
            } else { // si existe el local storage pero no tiene usuarios, agrego el usuario
                const  usuarios = [{nombre:nombreCompleto, correo: correoElectronico, usuario:for_usuario, contrasena:for_contrasena }];
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                alert("Usuario registrado correctamente:"); 
            }
        } else { // no existe el localstorage lo creo
            const  usuarios = [{ nombre:nombreCompleto, correo: correoElectronico, usuario:for_usuario, contrasena:for_contrasena }];
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Usuario registrado correctamente:"); 
        }
    }else{ 
        alert("Ingrese los datos solicitados");
    }
}

