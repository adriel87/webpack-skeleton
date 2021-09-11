//funcion autoinvocada

const myModule=(() => {
  "use strict";

  let deck = [];

  const palos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];


    let playersPoints = [];



  //botones
  const newGame     = document.querySelector("#newGame"),
        giveCard    = document.querySelector("#giveCard"),
        stopGame    = document.querySelector("#stopGame");

  //area de juego

  //jugador //computadora

  const score                   = document.querySelectorAll("small"),
        divCartas               = document.querySelectorAll('.div-cartas');

  //computadora

  const computerScore = document.querySelectorAll("small")[1];

  //este metodo crea una nueva baraja y esta esta barajada

  //esta funcion inicia el juego
  const gameInit = (numJugadores = 2) => {
    deck=crearDeck();
    playersPoints =[];

    for(let i =0 ; i< numJugadores;i++){
        playersPoints.push(0)
    }
    for (const divCarta of divCartas) {
      divCarta.innerHTML = '';
    }
  
    giveCard.disabled = false;
    stopGame.disabled = false;
    score.forEach(s => s.innerHTML=0)
  
    
  };

  const crearDeck = () => {
    deck = [];
    for (const palo of palos) {
      for (let i = 2; i <= 10; i++) {
        deck.push(i + palo);
      }
      for (const especial of especiales) {
        deck.push(especial + palo);
      }
    }
    
    return _.shuffle(deck);
    
  };

  // pedir carta
  const pedirCarta = () => {
    if (deck.length !== 0) {
      return deck.pop();
    }
    throw "no hay cartas en la baraja";
  };

  //obtener el valor de la carta

  const valorCarta = (carta = "") => {
    let valor = carta.slice(0, carta.length - 1);

    if (isNaN(valor)) {
      valor = valor === "A" ? 11 : 10;
    } else {
      valor = Number.parseInt(valor);
    }

    return valor;
  };

  //acumularpuntos

  const points = (carta ,turno)=>{

    playersPoints[turno] += valorCarta( carta );
    score[turno].innerHTML = playersPoints[turno];

  }

  //crear nueva carta en tablero

  const drawCard = (carta, htmlNode) =>{
    const nuevaCarta =document.createElement('img');
    nuevaCarta.src = `assets/cartas/${carta}.png`;
    nuevaCarta.className = 'carta';
    nuevaCarta.alt = `la carta es ${carta}`

    htmlNode.append(nuevaCarta);
  }

  //turno de la computer

  const computerGame = (minPoints) => {
    minPoints = minPoints > 21 ? 0 : minPoints;

    do {
      const carta = pedirCarta();

      points(carta, playersPoints.length-1);
    
      drawCard(carta,divCartas[divCartas.length-1]);

    } while (playersPoints[playersPoints.length-1] <= minPoints);

    winner();
  };

  const winner = ()=>{

    let winner = '',
        puntuation = 0;

    playersPoints.forEach((points, i) => {
      
      if(points > puntuation){
        if (points>21) { 
          console.warn(`el jugador ${ i + 1 } pierde`);
        }else{
          puntuation = points;
          winner = `el jugador ${ i + 1 } gana`
        }
      }
    });
    console.warn(winner);
  }
      

  // EVENTOS

  giveCard.addEventListener("click", () => {
    if (playersPoints[0] <= 21) {
      const carta = pedirCarta();

        points(carta,0);
        drawCard(carta,divCartas[0])
    
      if (playersPoints[0] > 21) {
        giveCard.disabled = true;
      } else if (playersPoints[0] == 21) {
        console.warn("21 , estas apunto");
      }
    }
  });


  stopGame.addEventListener("click", () => {
    computerGame(playersPoints[0]);
    stopGame.disabled = true;
    giveCard.disabled = true;
  });

  return {
    newGame: gameInit,
  };
})();
