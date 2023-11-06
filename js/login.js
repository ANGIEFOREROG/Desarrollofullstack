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
    alert("Usuario registrado correctamente"); 
}


