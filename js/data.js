import { setLocalStorage } from "./local-storage.js";

let usuarios = [
    {
        id: "id1",
        nombre: "Nestor Quiñones",
        correo: "n4xtor@gmail.com",
        telefono: "3182122259",
        contrasena: "12345"
    },
    {
        id: "id2",
        nombre: "Javier Valencia",
        correo: "nquinoes@cesde.net",
        telefono: "3102007573",
        contrasena: "12345"
    },
    
];

let cosas = []

// El método find busca para redireccionar el resultado
export function buscarUsuario(correo, clave) {
    let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.contrasena)
    return auth
}

export function registrarUsuario(){
    
}

export function registrarCosa(key, value){
    setLocalStorage(key, value);
}