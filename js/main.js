
// array of card objects
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// create an array to hold the active cards in play
var cardsInPlay = [];


// function to check if two cards are a match
var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
	    	alert("You found a match!");
	  	} else {
	    	alert("Sorry, try again.");
	 	}
};

// function to flip card over after user clicks their guess
var flipCard = function() {

	// test if there are 2 cards in play. If less than 2: flip card. If 2 are in play: dont flip card. 
	if (cardsInPlay.length < 2) {
		var cardId = this.getAttribute('data-id');
		console.log(cardId);
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		this.setAttribute('src',cards[cardId].cardImage);

		// logic: if cards in 
		if (cardsInPlay.length === 2) {
			checkForMatch();
		}
	} else {
		alert("Please press the reset button to play again!");
	}
};

// create game board
// div id: #game-board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.querySelector('#game-board').appendChild(cardElement);
	}
};

// create reset button
var createResetButton = function() {
	var buttonElement = document.createElement('button');
	buttonElement.setAttribute('name', 'reset');
	buttonElement.textContent = "Reset";
	buttonElement.addEventListener('click', resetBoard);
	// append to the section element above #game-board div
	document.querySelector('#reset-btn').appendChild(buttonElement);
};

// resetBoard fuction triggered by reset button
var resetBoard = function() {
	// reset game data
	cardsInPlay = [];

	// lremove current games cards with for loop
	for (var i = 0; i < cards.length; i++) {
		//traverse to remove img's
		elem = document.querySelector('img');
	    elem.parentNode.removeChild(elem);
	}
	// create new board by calling createBoard()
	createBoard();
};



createBoard();
createResetButton();