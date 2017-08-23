//Click start toggle jumbotron and show 
// Timer ticks down 120 seconds
// When timer hits zero trivia all done
// Correct answers
// Incorrect answers
// Unanswered
// Only one answer per question
var number = 60;
var intervalId;


// $(document).ready(function() {
// 	function initialScreen(intervalId = setInterval(decrement, 1000)) {
// 		startScreen()
//	$('random div with stuff').hide();
// 	}
// }

//jumbotron toggle when start is pressed

$('#jumbo').on('click', function(){
	$('#jumbo').toggle();

});


// timer
$("#btn btn-primary btn-lg").on("click", run);
function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        // stop();

        //  Alert the user that time is up.
        // alert("Time Up!");
      }
    }

    run();

    
//game times out if timer is less than 0
//switches to game over screen with correct answers and incorrect answers and unanswered

// function clock {
// 	timer = setInterval()

// }

//array of questions and answers

//key value pair down there how to use

let myArr = {
	'Is the sky blue?': ['yes','no','pizza']

}


var questionArray = {
  q1: 'What?',
  answers1: ["#button1a", "touched tree", "pizza", "running"],
  q2: 'Twat?',
  answers2: ['twerk', "teepee", "cheezus", "walking"]

}

