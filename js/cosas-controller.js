import { getLocalStorage } from "./local-storage.js";

let usuario = getLocalStorage("usuario");

document.querySelectorid("nombre-usuario").textContent = usuario.nombre
