//Funcion llamada desde el HTML con el boton
let juegocachipun = () => {
  var cantJuegos = parseInt(prompt("Ingrese la cantidad de partidas a jugar"));
  var contador = 1;  //contador para realizar la cantidad de jugadas ingresadas por el prompt
  //Ciclo Repetitivo
  while (contador <= cantJuegos) {
    var jugadaHumano = prompt(
      `Ingrese su jugada \n1. Piedra \n2.Papel \n3. Tijeras`
    );

    switch (jugadaHumano) {
      case "1":
        jugadaHumano = "Piedra";
        break;
      case "2":
        jugadaHumano = "Papel";
        break;
      case "3":
        jugadaHumano = "Tijeras";
        break;
      default:
        alert("Ingresaste un número incorrecto");
        break;
    }

    console.log(`humano ${jugadaHumano}`); //Probando que la selección esta correcta

    var maquinaJugada = jugadaMaquina()
    console.log(`${maquinaJugada}`)

    var ganador = defineGanador(jugadaHumano, maquinaJugada);


    

    //mensajes de las jugadas
    switch (ganador) {
      case "humano":
        document.write(`<h4>Juego N°${contador}</h4>`)
        document.write(`<h5>Humano: ${jugadaHumano} [ V/S ] Maquina: ${maquinaJugada} </h5>`)
        document.write(`Felicidades humano, haz ganado! <span>&#128079;</span><hr>`);
        break;
      case "maquina":
        document.write(`<h4>Juego N°${contador}</h4>`)
        document.write(`<h5>Humano: ${jugadaHumano} [ V/S ] Maquina: ${maquinaJugada} </h5>`)
        document.write(`Haz perdido maldito humano! <span>&#128540;</span><hr>`);
        break;
      case "empate":
        document.write(`<h4>Juego N°${contador}</h4>`)
        document.write(`<h5>Humano: ${jugadaHumano} [ V/S ] Maquina: ${maquinaJugada} </h5>`)
        document.write(`El Resultado es un empate <span>&#129309;</span><hr>`);
    }
    
    contador++;
    //funcion Juagada de la Maquina se ve ramdomicamente
    //que elige la maquina

    function jugadaMaquina() {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          return "Piedra";
          break;
        case 1:
          return "Papel";
          break;
        case 2:
          return "Tijeras";
          break;
      }
    }
    
    

    //Funcion para definir el ganador se ven las opciones desde el Humano para ganar en caso contrario gana la maquina
    function defineGanador(humano, maquina) {
      let resultado = "";
    
      // humano y maquina son las variables que entran en defineGanador
      if (humano == maquina) {
        resultado = "empate";
      } else if (
        (humano == "Tijeras" && maquina == "Papel") ||
        (humano == "Papel" && maquina == "Piedra") ||
        (humano == "Piedra" && maquina == "Tijeras")
      ) {
        resultado = "humano";
      } else {
        resultado = "maquina";
      }

      return resultado;
    }
  }
}
