


$(document).ready(function() {

	var randomNumber = Math.floor(Math.random() *101) + 19;
	$("#random-number").text(randomNumber);
	var counter = 0;
	var wins = 0;
	var losses = 0;
	genRan = function(){
			var li = [];
			for(i=0; i<4; i++){
				rn = Math.floor(Math.random() * 12) + 1;
				li.push(rn);
			}
			return li;
		}



	var randomList= genRan();

	for(i=1;i<5;i++){
		$("#" +i).attr("cvalue",randomList[i-1]);
	}	


//on click event

	$(".cimage").on("click", function() {
			counter += parseInt($(this).attr("cvalue"));
			$("#totalScore").text(counter);
			eval();
	});




	eval = function() {
		if (counter === randomNumber) {
		 wins++;
		 $("#wins").html("Wins: " + wins);
		 $("#you").html("You win!!");
		ru();
			}

		else if (counter > randomNumber) {
		 losses++;
		 $("#losses").html("Losses: " + losses);
		 $("#you").html("You lost!!");
		 ru();
		 
	}


//reset function
	ru = function() {
			randomNumber = Math.floor(Math.random() *101) + 19;
				$("#random-number").text(randomNumber);
			counter = 0;
			$("#totalScore").text(counter);

			var randomList= genRan();

			for(i=1; i<5; i++){
				$("#" +i).attr("cvalue", randomList[i-1]);
			}	
			
		}



}
		
});
	
