// This function wraps everything

$(document).ready(function () {


	

		wins: 0;
		loses: 0;
		userstart: 0;
		//This is the selection of 4 crystals
		// CrystalsMain : [
		// 	crystal1 = {
		// 		startPoints: 0,
		// 		hitPoints1: 0},
		// 	crystal2 = {
		// 		startPoints: 0,
		// 		hitPoints2: 0},			
		// 	crystal3 = {
		// 		startPoints: 0,
		// 		hitPoints3: 0},
		// 	crystal4 = {
		// 		startPoints: 0,
		// 		hitPoints4: 0}
		// ],

		function compNumber(num) {
			return Math.floor(Math.random() * 26 +num)
		};
			var randComp = compNumber(25);
			$('#score').html('<h3>' + randComp+ '</h3>');
			console.log(randComp);
					
		

		// $("#gem1").on("click", function () {

		// }),
		


		// sets up game	
		// setupGame: function () {

		// 	this.complete =  false;
		// 	// random number picked for each crystal
		// 	this.randomCrystalScore1 = (Math.floor(Math.random() * 12));
		// 	this.randomCrystalScore2 = (Math.floor(Math.random() * 12));
		// 	this.randomCrystalScore3 = (Math.floor(Math.random() * 12));
		// 	this.randomCrystalScore4 = (Math.floor(Math.random() * 12));
		// 	this.hitPoints1 = randomCrystalScore1;
		// 	this.hitPoints2 = randomCrystalScore2;
		// 	this.hitPoints3 = randomCrystalScore3;
		// 	this.hitPoints4 = randomCrystalScore4;
		// },
		


		// //How the score is caluclated when a crystal is picked
		// startScore: function (numberChoice) {
		// 				$( ".crystal1" ).click(function() {
		// 	  alert( "I think unicorns are kick ass!" );
		// 	});
		// 	$( ".crystal2" ).click(function() {
		// 	  alert( "I think unicorns are kick ass!" );
		// 	});
		// 	$( ".crystal3" ).click(function() {
		// 	  alert( "I think unicorns are kick ass!" );
		// 	});
		// 	$( ".crystal4" ).click(function() {
		// 	  alert( "I think unicorns are kick ass!" );
		// 	});
			
		// 	computerStart - hitPoints1 || computerStart - hitPoints2 computerStart - hitPoints3 || computerStart - hitPoints4; 
	

});
		
	// 	//determine if win or lose
	// 	winLose: function () {
	// 		if (computerStart == 0) {win++}
	// 		else (computerStart < 0) {loses--}
	// 	}
	// }



// crystalGame.setupGame();

//       document.onkeyup = function(numberChoice) {
//         crystalGame.numberChoice = String.fromCharCode(event.keyCode).;
//         crystalGame.startGame(crystalGame.numberChoice);
// }



	




// startGame: function(numberChoice) {
				
// 		}
