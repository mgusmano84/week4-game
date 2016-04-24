// This function wraps everything

$(document).ready(function(){

	var crystalGame = {

		wins = 0,
		loses = 0,
		userstart = 0,
		computerStart= 39,
		//This is the selection of 4 crystals
		CrystalsMain : [{
			crystal1: {
				startPoints = 0,
				hitPoints1 = 0,
				image: "<img class='gemPic' src='assets/images/blue.png'>"},
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
				image: "<img class='gemPic' src='assets/images/purple.png'>"}
		}],
		CrystalsMain = $('#crystals'),
		
		// sets up game	
		setupGame: function () {

			this.complete =  false;
			// random number picked for each crystal
			this.randomCrystalScore1 = (Math.floor(Math.random() * 12));
			this.randomCrystalScore2 = (Math.floor(Math.random() * 12));
			this.randomCrystalScore3 = (Math.floor(Math.random() * 12));
			this.randomCrystalScore4 = (Math.floor(Math.random() * 12));
			this.hitPoints1 = randomCrystalScore1;
			this.hitPoints2 = randomCrystalScore2;
			this.hitPoints3 = randomCrystalScore3;
			this.hitPoints4 = randomCrystalScore4;
		},
		
		//How the score is caluclated when a crystal is picked
		startScore: function (numberChoice) {
			
			computerStart - hitPoints1 || computerStart - hitPoints2 computerStart - hitPoints3 || computerStart - hitPoints4; 
		}
		
		//determine if win or lose
		winLose: function () {
			if (computerStart == 0) {win++}
			else (computerStart < 0) {loses--}
		}
	}

})

hangmanGame.setupGame();

      document.onkeyup = function(numberChoice) {
        crystalGame.numberChoice = String.fromCharCode(event.keyCode).;
        crystalGame.startGame(crystalGame.numberChoice);
}



	


		
	// }

// document.onkeyup = function(event) {
// 	hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	hangmanGame.updatePage(hangmanGame.letterGuessed);

// startGame: function(numberChoice) {
				
// 		}
