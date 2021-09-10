// 2C = 2 de treboles
// 2d = 2 de diamantes
// 2h = 2 de corazones
// 2s = 2 de espadas


//TODO crear baraja de cartas

const palos     = ['C','D','H','S']

const especiales  = ['A','J','Q','K']

let deck        =[];

let playerPoints =0,

    computerPoints = 0;


// referencias html

//botones
const newGame = document.querySelector('#newGame');
const giveCard = document.querySelector('#giveCard');
const stopGame = document.querySelector('#stopGame');

//area de juego

//jugador

const divCartas = document.querySelector('#jugador-cartas');

const playerScore = document.querySelectorAll('small')[0];


//computadora

const divCartasComputadora = document.querySelector('#computadora-cartas')

const computerScore = document.querySelectorAll('small')[1];


//este metodo crea una nueva baraja y esta esta barajada
const crearDeck = ()=>{
    for (const palo of palos) {
        for (let i = 2; i <=10; i++) {
            deck.push(i+palo)            
        }
        for (const especial of especiales) {
            deck.push(especial+palo)
        }
    }
   
    deck = _.shuffle(deck)
    
    return deck;
}


crearDeck();


// pedir carta
const pedirCarta = ()=>{

    if( deck.length!==0 ){
        
        const cartaCogida = deck.pop();
    
        return cartaCogida;

    }

    throw 'no hay cartas en la baraja'
}


//obtener el valor de la carta

const valorCarta = ( carta='' ) =>{
    
    let valor = carta.slice( 0 , carta.length-1)
    
    if(isNaN(valor)){
        
       valor = (valor === 'A')  ?11
                                :10 
      
    }else{
        valor = Number.parseInt(valor)
    }
    
    return valor;
}

valorCarta(pedirCarta())


//turno de la computer

const computerGame =( minPoints ) =>{

    minPoints = (minPoints>21) ?0 : minPoints 

do {
    
    const carta = pedirCarta();

    computerPoints += valorCarta(carta);

    computerScore.innerHTML = computerPoints;

    const nuevaCarta = document.createElement('img')
    nuevaCarta.src=`assets/cartas/${carta}.png`;
    nuevaCarta.className='carta';

    divCartasComputadora.append(nuevaCarta);
    

} while (computerPoints <= minPoints);


const msg = (playerPoints==computerPoints)  ? 'gua es un empate'
            :(computerPoints>21)            ? 'jugador gana'
            :'computadora gana'                                   

console.warn(msg);
    
}



// EVENTOS

giveCard.addEventListener('click', ()=>{

    

    if(playerPoints<=21){

        const carta = pedirCarta();
    
        playerPoints += valorCarta(carta);
    
        
    
        playerScore.innerHTML = playerPoints;
    
        const nuevaCarta = document.createElement('img')
        nuevaCarta.src=`assets/cartas/${carta}.png`;
        nuevaCarta.className='carta';
    
        divCartas.append(nuevaCarta)

        if (playerPoints>21) {
            giveCard.disabled = true
        }else if( playerPoints == 21){
            console.warn('21 , estas apunto');
        }
    }

  

})

newGame.addEventListener('click', ()=>{

    divCartas.innerHTML='';
    divCartasComputadora.innerHTML='';

    crearDeck();
    playerPoints = 0;
    computerPoints = 0;
    giveCard.disabled=false;
    stopGame.disabled=false;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    console.log('click en nuevo juego')
})

stopGame.addEventListener('click', ()=>{
    computerGame(playerPoints)
    stopGame.disabled =true;
    giveCard.disabled =true;
    console.log('clikc en stop');
})

