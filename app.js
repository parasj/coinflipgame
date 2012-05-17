$(document).ready(function() {
	$("#result_container").hide();
	$("#flipbutton").click(function() {
		flip();
	});
});

function flip() {
	var running = true;
	var pot = 1;
	var prob_tails = 2;
	while (running == true) {
		if(Math.floor(Math.random() * 10000)%prob_tails == 0) {
			// tails
			running = false;
			$("#result_container").show();
			$("#results").html("$"+pot);
			console.log(pot);
		} else {
			pot *= 2;
		}
	}
}