// This function wraps everything

$(document).ready(function () {


	

		var wins = 0;
		var loses= 0;
		var userStart = 0;
		randomCrystalScore1 = (Math.floor(Math.random() * 12));
		randomCrystalScore2 = (Math.floor(Math.random() * 12));
		randomCrystalScore3 = (Math.floor(Math.random() * 12));
		randomCrystalScore4 = (Math.floor(Math.random() * 12));
	

		function compNumber(num) {
			return Math.floor(Math.random() * 26 + num)
		};
		var randComp = compNumber(25);
		$('#score').html('<h3>' + randComp+ '</h3>');
		$('#userscore').html('<h3>' +userStart+ '</h3>');




		
					
		//clicking event for each gem initiated

		$(".gem1").on("click", function () {
			userStart += randomCrystalScore1;
			$('#userscore').html('<h3>' +userStart+ '</h3>')
		});
		$(".gem2").on("click", function () {
			userStart += randomCrystalScore2;
			$('#userscore').html('<h3>' +userStart+ '</h3>')
		});
		$(".gem3").on("click", function () {
			userStart += randomCrystalScore3;
			$('#userscore').html('<h3>' +userStart+ '</h3>')
		});
		$(".gem4").on("click", function () {
			userStart += randomCrystalScore4;
			$('#userscore').html('<h3>' +userStart+ '</h3>')
		});
		


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
		

	

});
		
	// 	//determine if win or lose
	// 	winLose: function () {
	// 		if (computerStart == 0) {win++}
	// 		else (computerStart < 0) {loses--}
	// 	}
	// }



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

// crystalGame.setupGame();

//       document.onkeyup = function(numberChoice) {
//         crystalGame.numberChoice = String.fromCharCode(event.keyCode).;
//         crystalGame.startGame(crystalGame.numberChoice);
// }



	




// startGame: function(numberChoice) {
				
// 		}
