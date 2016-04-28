// This function wraps everything

$(document).ready(function () {


		var wins1 = 0;
		var loses1= 0;
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
			$('#userscore').html('<h3>' +userStart+ '</h3>');
			winOrLose()
		});
		$(".gem2").on("click", function () {
			userStart += randomCrystalScore2;
			$('#userscore').html('<h3>' +userStart+ '</h3>');
			winOrLose()
		});
		$(".gem3").on("click", function () {
			userStart += randomCrystalScore3;
			$('#userscore').html('<h3>' +userStart+ '</h3>');
			winOrLose()
		});
		$(".gem4").on("click", function () {
			userStart += randomCrystalScore4;
			$('#userscore').html('<h3>' +userStart+ '</h3>');
			winOrLose()
		});
		
		//wins and loses filler
		$('#wins').html("<h4>" + wins1 + "</h4>")
		$('#loses').html("<h4>" + loses1 + "</h4>")


		//determine if win or lose
		function winOrLose() {
			if (userStart == randComp) {wins1++;
			$('#wins').html("<h4>" + wins1 + "</h4>")};
			refresh()

			if (userStart > randComp) {loses1++;
			$('#loses').html("<h4>" + loses1 + "</h4>")};
			refresh()
		};

		

});
		



	
	


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
