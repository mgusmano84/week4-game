var crystalGame = {
	
	this.wins = 0;
	this.loses = 0;
	this.crystal1 = 0;
	this.crystal2 = 0;
	this.crystal3 = 0;
	this.crystal4 = 0;
	this.randomCrystalScore = (Math.floor(Math.random() * 12));


	startGame: function(numberChoice) {
			
	}

}

crystalGame.start();
      document.onkeyup = function(event) {
        crystalGame.numberChoice = String.fromCharCode(event.keyCode).;
        crystalGame.startGame(crystalGame.numberChoice);
}


// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);