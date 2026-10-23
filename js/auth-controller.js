// // Se trabaja con el objeto document para acceder a los elementos del DOM|
// console.log(document.all[41]);
// console.log(document.getElementsByClassName("form-input"));
// console.log(document.getElementsByClassName("form-label"));

// // Se trabaja con el id de los elementos, no con la clase
// console.log(document.getElementById(""));

// // Se trabaja con querySelector y querySelectorAll para acceder a los elementos del DOM
// console.log(document.querySelectorAll(".form-input"));
// console.log(document.querySelector(".form-input"));
// console.log(document.querySelector("input[type='email']"));
import { redirectAlert } from "./alerts.js";
import { buscarUsuario } from "./data.js";

function iniciarSesion(){
let correo =document.querySelector("#correo").value;
let clave = document.querySelector("#clave").value;
let usuario = buscarUsuario(correo, clave);
let registro = registrarUsuario();

if(usuario){
    redirectAlert("Bienvenido al sistema " + usuario.nombre, "success", "/pages/catalogo.html");
}   else{
        redirectAlert("Error de credenciales", "error", "/index.html");
    }
}


let btn_login = document.querySelector("#btn-login");

//btn_login.addEventListener(eventos[0], iniciarSesion)
btn_login.addEventListener("click", iniciarSesion)


