$(document).ready(function(){

	var crystalGame = {

		wins = 0,
		loses = 0,
		userstart = 0,
		computerStart= 39,


		crystal1 = $('#crystals'),  
		crystalGroup1 : {				{
			startPoints: 0,
			hitPoints1: 0,
			image: "<img class='gemPic' src='assets/images/blue.png'>",
		},
		crystal1.append(crystalGroup1),

		crystal2: {
			startPoints = 0,
			hitPoints2 = 0,
			image: "<img class='gemPic' src='assets/images/green.png'>"},			
		crystal3: {
			startPoints = 0,
			hitPoints3 = 0,
			image: "<img class='gemPic' src='assets/images/orange.png'>"},
		crystal4: {
			startPoints = 0,
			hitPoints4 = 0,
			image: "<img class='gemPic' src='assets/images/purple.png'>"},
		
		setupGame: function () {
			// random number picked
		this.randomCrystalScore1 = (Math.floor(Math.random() * 12));
		this.randomCrystalScore2 = (Math.floor(Math.random() * 12));
		this.randomCrystalScore3 = (Math.floor(Math.random() * 12));
		this.randomCrystalScore4 = (Math.floor(Math.random() * 12));
		this.hitPoints1 = randomCrystalScore1;
		this.hitPoints2 = randomCrystalScore2;
		this.hitPoints3 = randomCrystalScore3;
		this.hitPoints4 = randomCrystalScore4;
		}

		startScore: function () {
			if ()

		}
		}
	





	// 	}

	// 		setupGame: function() {
	// 	// ---Pick a random word
	// 	var objKeys = Object.keys(this.wordsToPick);
	// 	this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

	// 	this.lettersOfTheWord = this.wordInPlay.split('');
	// 	this.rebuildWordView();
	// 	this.processUpdateTotalGuesses();
	
	// }


})

hangmanGame.setupGame();

      document.onkeyup = function(event) {
        crystalGame.numberChoice = String.fromCharCode(event.keyCode).;
        crystalGame.startGame(crystalGame.numberChoice);
}



	


		
	// }

// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);

// startGame: function(numberChoice) {
				
// 		}
