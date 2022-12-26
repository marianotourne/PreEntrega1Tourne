// PREGUNTA AL USUARIO OPCION A ELEGIR Y DEVUELVE RESULTADO ELEGIDO EN PALABRAS
function obtenerOpcion(nombreJugador) {
  let opcion = Number(
    prompt(
      `Seleccione opción para el ${nombreJugador}:\n1: Piedra\n2: Papel\n3: Tijera`
    )
  );

  let opcionElegida;
  switch (opcion) {
    case 1:
      opcionElegida = "Piedra";
      break;
    case 2:
      opcionElegida = "Papel";
      break;
    case 3:
      opcionElegida = "Tijera";
      break;
    default:
      opcionElegida = "ERROR";
  }

  return opcionElegida;
}

// RECIBE VALORES INGRESADOS POR JUGADORES Y CALCULA EL RESULTADO
function calcularResultado(opcionJugador1, opcionJugador2) {
  let resultado = "";
  if (opcionJugador1 === "ERROR" || opcionJugador2 === "ERROR") {
    resultado =
      "No se puede calcular el resultado porque ingresaron alguna opción incorrecta";
  } else if (opcionJugador1 === opcionJugador2) {
    resultado = "Empataron";
  } else if (
    (opcionJugador1 === "Piedra" && opcionJugador2 === "Tijera") ||
    (opcionJugador1 === "Papel" && opcionJugador2 === "Piedra") ||
    (opcionJugador1 === "Tijera" && opcionJugador2 === "Papel")
  ) {
    resultado = `Ganó el Jugador 1: ${opcionJugador1} le gana a ${opcionJugador2}`;
  } else {
    resultado = `Ganó el Jugador 2: ${opcionJugador2} le gana a ${opcionJugador1}`;
  }

  return resultado;
}

//PROGRAMA PRINCIPAL
function main() {
  let respuesta = 1;
  do {
    const opcionJugador1 = obtenerOpcion("Jugador 1");
    const opcionJugador2 = obtenerOpcion("Jugador 2");

    const resultado = calcularResultado(opcionJugador1, opcionJugador2);
    alert(resultado);

    respuesta = Number(
      prompt(
        "Si querés volver a jugar presioná el número 1, caso contrario presioná cualquier tecla"
      )
    );
  } while (respuesta == 1);
}

main();
