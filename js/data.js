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

// El método find busca para redireccionar el resultado
export function buscarUsuario(correo, clave) {
    let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.contrasena)
    return auth
}

export function registrarUsuario() {
   // let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Agregar el nuevo usuario al array
  //usuarios.push(nuevoUsuario);

  // Guardar el array actualizado en localStorage
  //localStorage.setItem('usuarios', JSON.stringify(usuarios));

  //alert('¡Usuario registrado con éxito!');
  //registroForm.reset();
}