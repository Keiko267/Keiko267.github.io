/*const expresiones = {
  nombre: /^<a-zA-ZÀ-ÿ\s]{1,16}-$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-p-.]+$/,
  telefono: /^\d{9}/
} */



// El nombre no puede estar en blanco.
function validartxtNombre() {
  var enviar = false;
  var objeto = document.getElementById("txtNombre");
  var spanerror = document.getElementById("txtNombreError");
  if ((objeto.value).length > 0) {
    if (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(objeto.value)) {
      // ocultar el span
      spanerror.className = 'error0';
      // Cumple la condición, se cambia el estado de enviar a true
      return enviar = true;
    }
    else {
      spanerror.innerHTML = "Error, el campo nombre no puede incluir símbolos";
      spanerror.className = 'error1';
      return enviar = false
    }
  } 
  else {
    // No cumple, se lanza error y se muestra span con mensaje de error
    spanerror.innerHTML = "Error, el campo nombre no puede estar en blanco.";
    // activar visibilidad del span error
    spanerror.className = "error1";
    // Se cambia el estado de enviar a false por no cumplir requisitos
    return enviar = false;
  }
}

// Los apellidos no pueden estar en blanco y se deben introducirse al menos dos apellidos.
function validartxtApellidos() {
  var enviar = false;
  var objeto = document.getElementById("txtApellidos");
  var spanerror = document.getElementById("txtApellidosError");
  if ((objeto.value).length > 0) {
    // Cumple la condición, comprobar que tiene espacio. 
    if (/^([a-zA-ZÀ-ÿ]+[\s]*)+$/.test(objeto.value)) {
      // ocultar el span
      spanerror.className = "error0";
      // Cumple la condición, se cambia el estado de enviar a true
      return enviar = true;
    } else {
      // No cumple, se lanza error y se muestra span con mensaje de error
      spanerror.innerHTML = "Error los apellidos no pueden contener símbolos.";
      // activar visibilidad del span error
      spanerror.className = "error1";
      // Se cambia el estado de enviar a false por no cumplir requisitos
      return enviar = false;
    }

  } else {
    // No cumple, se lanza error y se muestra span con mensaje de error
    spanerror.innerHTML = "Error, el campo apellido no puede estar en blanco.";
    // activar visibilidad del span error
    spanerror.className = "error1";
    // Se cambia el estado de enviar a false por no cumplir requisitos
    return enviar = false;
  }
}
// Email no puede estar en blanco y tiene que ser del estilo de la expresión
function validartxtEmail() {
  var enviar = false;
  var objeto = document.getElementById("txtEmail");
  var spanerror = document.getElementById("txtEmailError");
  if ((objeto.value).length > 0) {
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-p-.]+$/.test(objeto.value)) {
      spanerror.className = "error0";
      return enviar = true;
    }
    else {
      spanerror.innerHTML = "Error, compruebe que es una dirección de email válida";
      spanerror.className = "error1";
      return enviar = false;
    }
  }
  else {
    spanerror.innerHTML = "Error, el campo email no puede estar en blanco";
    spanerror.className = "error1";
    return enviar = false;
  }
}
//Personas no puede ser nulo, el mínimo y máximo están controlados en el HTML
function validarPersonas() {
  var enviar = false;
  var objeto = document.getElementById("Personas_input").value;
  var spanerror = document.getElementById("Personas_inputError");
  if (objeto >= 1) { // Porque la opción por defecto es " "
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, el campo no puede estar en blanco";
    spanerror.className = "error1";
    return enviar = false;
  }

}

function validarTelefono(){
  var enviar = false;
  var objeto = document.getElementById("numTelefMovil");
  var spanerror = document.getElementById("numTelefMovilError");
  if ((objeto.value == 0)){
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    if (/^[7|6]{1}([\d]{2}[-]*){3}[\d]{2}$/.test(objeto.value)){
      spanerror.className = "error0";
      return enviar = true;
    }
    else {
      spanerror.innerHTML = "Error, el formato del teléfono no es apropiado, use el teléfono móvil";
      spanerror.className = "error1";
      return enviar = false;
    }
  }
}

//Salas no puede ser nulo, el número de salas está controlado en el HTML
function validarSala() {
  var enviar = false;
  var objeto = document.getElementById("Salas_input").value;
  var spanerror = document.getElementById("Salas_inputError");
  if (objeto >= 1) {
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, el campo no puede estar en blanco";
    spanerror.className = "error1";
  }
}
// Fecha no puede ser nulo ni ser anterior a la de hoy
function validarFecha() {
  var enviar = false;
  var objeto = document.getElementById("Fecha_input");
  var spanerror = document.getElementById("Fecha_inputError");
  var date = new Date(objeto.value); //date = La string que pido de día y hora
  var validated = date > Date.now(); // Se puede poner mayor porque se mide en ms a partir de una fecha
  if (validated) {
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, la fecha escogida no puede ser anterior a la de hoy";
    spanerror.className = "error1";
    return enviar = false;
  }
}

function validarNHoras(){
  var enviar = false;
  var objeto = document.getElementById("NHoras");
  var objeto2 = document.getElementById("NHoras2");
  var objeto3 = document.getElementById("NHoras3");
  var spanerror = document.getElementById("NHorasError");
  if (objeto.checked || objeto2.checked || objeto3.checked){ //Para ver si ha marcado al menos una de las opciones
    spanerror.className = "error0";
    return enviar = true;
  }
  else{
    spanerror.innerHTML = "Error, debe seleccionar al menos una opción";
    spanerror.className = "error1";
    return enviar = false;
  }
}

function validarPrivacidad() {
  var enviar = false;
  var objeto = document.getElementById("Privacidad_input");
  var spanerror = document.getElementById("Privacidad_inputError");
  if (objeto.checked) { // Checked es un valor que te permite saber si está... checked
    spanerror.className = "error0";
    return enviar = true;
  }
  else {
    spanerror.innerHTML = "Error, debe aceptar la política de privacidad";
    spanerror.className = "error1";
    return enviar = false;
  }
}



// funcion a ejecutar cuando se pulse el boton enviar
function enviarFormulario() {
  var contador = 0;
  if (validartxtNombre()) {
    contador++;
  }
  if (validartxtApellidos()) {
    contador++;
  }
  if (validartxtEmail()) {
    contador++;
  }
  if (validarTelefono()){
    contador++;
  }
  if (validarFecha()) {
    contador++;
  }
  if (validarPersonas()) {
    contador++;
  }
  if (validarSala()) {
    contador++;
  }
  if (validarNHoras()){
    contador++;
  }

  if (validarPrivacidad()) {
    contador++;
  }

  if (contador == 9) { 
    // si ha pasado la valición mostrar alert y enviar formulario
    alert("Reserva hecha, gracias");
    document.formulario1.submit();
    window.location.href = ("./index.html");
  }
  else alert("Error, revise los campos");
}