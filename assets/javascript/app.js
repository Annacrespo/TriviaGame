//Click start toggle jumbotron and show 
// Timer ticks down 120 seconds
// When timer hits zero trivia all done
// Correct answers
// Incorrect answers
// Unanswered

var number = 60;
var intervalId;
var wins = 0;
var losses = 0;
var incomplete = 0;


// $(document).ready(function() {
// 	function initialScreen(intervalId = setInterval(decrement, 1000)) {
// 		startScreen()
//	$('random div with stuff').hide();
// 	}
// }

//jumbotron toggle when start is pressed

$('#jumbo').on('click', function() {
    $('#jumbo').toggle();
    $('#questionOneContainer').show();
    

    function run() {
        intervalId = setInterval(decrement, 1000);
        decrement.start();
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
            stop();

            //  Alert the user that time is up.
            alert("Time Up!");
        }
    }

    run();

    function stop() {
        intervalId = clearInterval(intervalId);

        //game over screen display scores
        if (intervalId === 0) {

        }
    }

});

$( "input" ).on( "click", function() {
  $( "#log10" ).html( $( "#questionTenContainer input:checked" ).val());

});


//game times out if timer is less than 0
//switches to game over screen with correct answers and incorrect answers and unanswered


//key value pair down there how to use

// let myArr = {
// 	'Is the sky blue?': ['yes','no','pizza']

// }


// var questionArray = {
//   q1: 'What?',
//   answers1: ["#button1a", "touched tree", "pizza", "running"],
//   q2: 'Twat?',
//   answers2: ['twerk', "teepee", "cheezus", "walking"]

// }

// if (#q1 == 2) {
// 	wins++;

// 	console.log(wins);
// }