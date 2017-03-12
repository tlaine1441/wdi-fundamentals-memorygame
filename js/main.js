
// create cards array with queen and king 
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
var cardsInPlay = [];
var tryCount = 0;

var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
	    	alert("You found a match!");
	  	} else {
	    	alert("Sorry, try again.");
	 	}
};

var flipCard = function() {
	if (tryCount < 2) {
		var cardId = this.getAttribute('data-id');
		console.log(cardId);
		console.log("User flipped " + cards[cardId].rank);
		cardsInPlay.push(cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		this.setAttribute('src',cards[cardId].cardImage);
		if (cardsInPlay.length === 2) {
			checkForMatch();
		}
	} else {
		alert("Please press the reset button to play again!");
	}
	tryCount += 1;
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.querySelector('#game-board').appendChild(cardElement);
	}
};

var createReset = function() {
	var buttonElement = document.createElement('button');
	buttonElement.setAttribute('name', 'reset');
	buttonElement.textContent = "Reset";
	buttonElement.addEventListener('click', resetBoard);
	document.querySelector('#reset-btn').appendChild(buttonElement);
};

var resetBoard = function() {
	cardsInPlay = [];
	tryCount = 0;

	for (var i = 0; i < cards.length; i++) {
		elem = document.querySelector('img');
	    elem.parentNode.removeChild(elem);
	}
	createBoard();
};



createBoard();
createReset();