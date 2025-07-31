let numeroSecreto = 0;
let intentos = 0;
let listanumerosSorteados = [];
let numeroMaximo = 10; // Definimos el número máximo para el juego

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);
  //   console.log(typeof (numeroDeUsuario));
  //   console.log(numeroDeUsuario);
  //   console.log(typeof (numeroSecreto));
  //   console.log(numeroSecreto);
  console.log(numeroDeUsuario === numeroSecreto);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Felicidades! Has acertado el número secreto en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el Usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor.");
    } else asignarTextoElemento("p", "El número secreto es mayor.");
  }
  intentos++;
  limparCaja();
  return;
}

function limparCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  // Si ya sorteamos todos los números
  if (listanumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles.");
    return null; // Indicamos que no se pudo generar un nuevo número
  } else {
    // Si el número generado está incluido en la lista
    if (listanumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto(); // Llamada recursiva
    } else {
      listanumerosSorteados.push(numeroGenerado);
      return numeroGenerado; // Retornamos el número generado
    }
  }
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  //limpiar caja
  limparCaja();
  //Indicar intervalo de numeros
  condicionesIniciales();
  //generar el numero secreto

  //inicializar intentos

  //desactivar boton de nuevo juego
  document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
