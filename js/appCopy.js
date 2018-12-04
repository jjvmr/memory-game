/* Create a list that holds all of your cards */

const deck = document.querySelector('.deck') // will later be used to 'shuffle'

let cards = document.getElementsByClassName('card'); // grabs live HTMLCol and turns it into an array
let cardsArray = [...cards] /*holds all cards*/

let stars = document.querySelector('.fa-star');
let moves = document.querySelector('.moves');
moves = 0;
let open = document.querySelectorAll('.open');
let show = document.querySelectorAll('.show');

/* Shuffle Game */
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

let resetBtn = document.querySelector('.restart');

resetBtn.addEventListener('click', newGame);
function newGame(){
    var newDeck = shuffle(cardsArray);
    for (var i= 0; i < newDeck.length; i++){
        [].forEach.call(newDeck, function(newItem){
            deck.appendChild(newItem);
        });
        cardsArray[i].classList.remove('open', 'show', 'match')
    }
}


// Flipping Cards
let flipped = false;
let card1;
let card2;

for (let i=0, j=0; i<=cardsArray.length, j<=cardsArray.length; i++, j++) { //eventlistener at the bottom
    let flip = function () {
        cardsArray[i].classList.add('open', 'show');
        
        // first card flipped
        if (!flipped) {     
            flipped = true;
            card1 = cardsArray[i];

        // second card flipped    
        } else {            
            flipped = false;
            card2 = cardsArray[j];
        
            //matching cards
            if (card1.dataset.pairnumb === card2.dataset.pairnumb) {
                card1.removeEventListener('click', flip) //Allows card to stay flipped
                card2.removeEventListener('click', flip) //Allows card to stay flipped
                card1.classList.add('match');
                card2.classList.add('match');
            } else {

            //not a match
                card1.classList.remove('open', 'match', 'show');
                card2.classList.remove('open', 'match', 'show');
            }
        }
    }

    cardsArray[i].addEventListener('click', flip);
    cardsArray[j].addEventListener('click', flip);

    //Move counter
    function moveCount() {
        moves++;
        moves.innerHTML = moves++;
    }
} 

//Add Stars



/*
 * set up the event listener for a card. If a card is clicked:
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
