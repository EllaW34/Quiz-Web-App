$(document).ready(function(){
	q1Correct = false;
	q2Correct = false;
	q3Correct = false;
	q4Correct = false;
	q5Correct = false;
	q1 = "Incorrect";
	q2 = "Incorrect";
	q3 = "Incorrect";
	q4 = "Incorrect";
	q5 = "Incorrect";
	score = 0;
	scoreText = "";
	
	$(".hidden").hide();
	
	$(".1correct").click(function(){
		q1Correct = true
		q1 = "Correct";
	});
	$(".1incorrect").click(function(){
		q1Correct = false;
		q1 = "Incorrect";
	});
	$(".2correct").click(function(){
		q2Correct = true;
		q2 = "Correct";
	});
	$(".2incorrect").click(function(){
		q2Correct = false;
		q2 = "Incorrect";
	});
	$(".3correct").click(function(){
			q3Correct = true;
			q3 = "Correct";
	});
	$(".3incorrect").click(function(){
			q3Correct = false;
			q3 = "Incorrect";
	});
	$(".4correct").click(function(){
			q4Correct = true;
			q4 = "Correct";
	});
	$(".4incorrect").click(function(){
			q4Correct = false;
			q4 = "Incorrect";
	});
	$(".5correct").click(function(){
			q5Correct = true;
			q5 = "Correct";
	});
	$(".5incorrect").click(function(){
			q5Correct = false;
			q5 = "Incorrect";
	});
	$("#button").click(function(){
		if(q1Correct == true){
			score += 1;
		}
		if(q2Correct == true){
			score += 1;
		}
		if(q3Correct == true){
			score += 1;
		}
		if(q4Correct == true){
			score += 1;
		}
		if(q5Correct == true){
			score += 1;
		}
		$("#scoreText").text("You got " + score + "/5.");
		score = 0;
		$(".hidden").show();
		$("#1soln").text(q1 + "; Answer b is right because System.out.println() moves down a line after printing.");
		$("#2soln").text(q2 + "; Answer d is right because int variables get rid of the decimal.");
		$("#3soln").text(q3 + "; Answer a is right because coumpound assignment operators(+=) can be used in place of the assignment operator(x = x + 8).");
		$("#4soln").text(q4 + "; Answer c is right because strings need to have quotation marks around them so that they don't get confused for a variable.");
		$("#5soln").text(q5 + "; Answer c is right because (int)(num + 0.5) rounds a number by adding 0.5 and chopping off the decimal.");
	})
	
	
});