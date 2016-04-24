var crystalGame = {
	
	this.wins = 0;
	this.loses = 0;

	start: function() {
		this.crystal1 = 0;
		this.crystal2 = 0;
		this.crystal3 = 0;
		this.crystal4 = 0;
		this.randomCrystalScore = (Math.floor(Math.random() * 12));
			$("score").html(randomCrystalScore);
	}

}

crystalGame.start();
      document.onkeyup = function(event) {
        var number = String.fromCharCode(event.keyCode).;
        crystalGame.choice(number);
}


// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);