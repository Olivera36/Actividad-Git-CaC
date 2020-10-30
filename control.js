const ingresar = document.getElementById('ingresar'); // representa al boton de html

ingresar.onclick = function(){ // se ejecuta al clickear sobre el boton  

    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    let valUser = /\w+@\w+\.+[a-z]/;

    if(usuario === "" && password === ""){
        alert("Por favor, complete todos los campos para ingresar.");
    } else if(usuario === ""){
        alert("Debe completar el usuario para ingresar.");
    } else if(password === ""){
        alert("Debe completar la contraseña para ingresar.");
    } else if(!valUser.test(usuario)){
        alert("Usuario incorrecto. \nPor favor, ingrese una dirección de correo electrónico válida.");
    } else {
        alert("¡Acceso exitoso!");
    } 
    
    //validar
    // let correo = document.getElementById('usuario').value;
    // correo.includes("@") ? alert("Funciona") : alert("No funciona");
} 

