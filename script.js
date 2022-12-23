/*
Crear un algoritmo con un condicional.
Crear un algoritmo utilizando un ciclo.

Utilizar funciones para realizar esas operaciones.
*/


let opcionJugador1
let opcionJugador2

let seleccion1
let seleccion2

function preguntarOpcion() {
	opcionJugador1 = Number(prompt("Seleccione opción para el jugador 1:\n1: Piedra\n2: Papel\n3: Tijera"));
	opcionJugador2 = Number(prompt("Seleccione opción para el jugador 2:\n1: Piedra\n2: Papel\n3: Tijera"));
}

function seleccionJugadorUno() {
	switch(true) {
		case opcionJugador1==1:
			seleccion1="Piedra";
		break;
		case opcionJugador1==2:
			seleccion1="Papel";
		break;
		case opcionJugador1==3:
			seleccion1="Tijera";
		break;
	  default:
	    seleccion1="ERROR";
	    break;
	}
}

function seleccionJugadorDos() {
	switch(true) {
		case opcionJugador2==1:
			seleccion2="Piedra";
		break;
		case opcionJugador2==2:
			seleccion2="Papel";
		break;
		case opcionJugador2==3:
			seleccion2="Tijera";
		break;
	  default:
	    seleccion2="ERROR";
	    break;
	}
}

function jugar(){
	let resultado;
	preguntarOpcion()
	seleccionJugadorUno(opcionJugador1)
	seleccionJugadorDos(opcionJugador2)
	if (seleccion1 == "ERROR" || seleccion2 == "ERROR") {
		return("No se puede calcular el resultado porque ingresaron alguna opción incorrecta")
	} else if (opcionJugador1 === opcionJugador2) {
        return resultado = "Empataron";
    }
    else if ((opcionJugador1 == 1 && opcionJugador2 == 3) || (opcionJugador1 == 2 && opcionJugador2 == 1) || (opcionJugador1 == 3 && opcionJugador2 == 2))
        {
            return resultado = "Ganó el jugador 1: " + seleccion1 + " le gana a " + seleccion2;
        }
        else {return resultado = "Ganó el jugador 2: " + seleccion2 + " le gana a " + seleccion1}
}

function repetir() {
	let respuesta;
	do {

		alert(jugar());
	    respuesta = Number(prompt("Si querés volver a jugar presioná el número 1, caso contrario presioná cualquier tecla"));
	} while (respuesta == 1)
}

repetir()

/*
console.log("Jugador 1 eligió: " + opcionJugador1)
console.log("Jugador 2 eligió: " + opcionJugador2)
console.log(seleccion1)
console.log(seleccion2)
*/




