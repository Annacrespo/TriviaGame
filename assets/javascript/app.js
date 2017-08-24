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
var answers=[];

var correct=["1b","2a","3c","4a","5b","6c","7d","8a","9c","10b"];


// $(document).ready(function() {
// 	function initialScreen(intervalId = setInterval(decrement, 1000)) {
// 		startScreen()
// 	$('random div with stuff').hide();
// 	}
// }

//jumbotron toggle when start is pressed

$('#jumbo').on('click', function() {
    $('#jumbo').hide();
    $('#questionOneContainer').show();
    run();

    });

//question one input
 $("#questionOneContainer input").on( "click", function() {
  $( "#answer1" ).html( $( "#questionOneContainer input:checked" ).val());
  var answer1 = $( "input:checked" ).val()
  if(answer1){
  	$("#questionTwoContainer").show();
  	$("#questionOneContainer").hide();
    console.log(answers);
  
    if(answer1 === correct[0])
    {
      answers.push(answer1);
      console.log(answers);
    }
  }
})

   $("#questionTwoContainer input").on( "click", function() {
  $( "#answer2" ).html( $( "#questionTwoContainer input:checked" ).val());
  var answer2 = $( "input:checked" ).val()
  if(answer2){
  	$("#questionThreeContainer").show();
  	$("#questionTwoContainer").hide();
    
    if(answer2 === correct[1])
    {
      answers.push(answer2);
      console.log(answers);
    }
  }

  });


   $("#questionThreeContainer input").on( "click", function() {
  $( "#answer3" ).html( $( "#questionThreeContainer input:checked" ).val());
  var answer3 = $( "input:checked" ).val()
  if(answer3){
  	$("#questionFourContainer").show();
  	$("#questionThreeContainer").hide();
    if(answer3 === correct[2])
    {
      answers.push(answer3);
      console.log(answers);
    }
  }
  });

   $("#questionFourContainer input").on( "click", function() {
  $( "#answer4" ).html( $( "#questionFourContainer input:checked" ).val());
  var answer4 = $( "input:checked" ).val()
  if(answer4){
  	$("#questionFiveContainer").show();
  	$("#questionFourContainer").hide();
    if(answer4 === correct[3])
    {
      answers.push(answer4);
      console.log(answers);
    }
  }
  });


   $("#questionFiveContainer input").on( "click", function() {
  $( "#answer5" ).html( $( "#questionFiveContainer input:checked" ).val());
  var answer5 = $( "input:checked" ).val()
  if(answer5){
  	$("#questionSixContainer").show();
  	$("#questionFiveContainer").hide();
    if(answer5 === correct[4])
    {
      answers.push(answer5);
      console.log(answers);
    }
  }
  });


   $("#questionSixContainer input").on( "click", function() {
  $( "#answer6" ).html( $( "#questionSixContainer input:checked" ).val());
  var answer6 = $( "input:checked" ).val()
  if(answer6){
  	$("#questionSevenContainer").show();
  	$("#questionSixContainer").hide();
    if(answer6 === correct[5])
    {
      answers.push(answer6);
      console.log(answers);
    }
  }
  });


   $("#questionSevenContainer input").on( "click", function() {
  $( "#answer7" ).html( $( "#questionSevenContainer input:checked" ).val());
  var answer7 = $( "input:checked" ).val()
  if(answer7){
  	$("#questionEightContainer").show();
  	$("#questionSevenContainer").hide();
    
    if(answer7 === correct[6])
    {
      answers.push(answer7);
      console.log(answers);
    }
  }
  });


   $("#questionEightContainer input").on( "click", function() {
  $( "#answer8" ).html( $( "#questionEightContainer input:checked" ).val());
  var answer8 = $( "input:checked" ).val()
  if(answer8){
  	$("#questionNineContainer").show();
  	$("#questionEightContainer").hide();
    if(answer8 === correct[7])
    {
      answers.push(answer8);
      console.log(answers);
    }
  }
  });


   $("#questionNineContainer input").on( "click", function() {
  $( "#answer9" ).html( $( "#questionNineContainer input:checked" ).val());
  var answer9 = $( "input:checked" ).val()
  if(answer9){
  	$("#questionTenContainer").show();
  	$("#questionNineContainer").hide();
    if(answer9 === correct[8])
    {
      answers.push(answer9);
      console.log(answers);
    }
  }
  });

   $("#questionTenContainer input").on( "click", function() {
  $( "#answer10" ).html( $( "#questionTenContainer input:checked" ).val());
  var answer10 = $( "input:checked" ).val()
  if(answer10){
  	$("#questionTenContainer").hide();
      stop();
    if(answer10 === correct[9])
    {
      answers.push(answer10);
      console.log(answers);
    }
    checkAnswers(answers);
  }

  });

   function checkAnswers(arr)
   {
    for(i = 0; i < arr.length; i++)
    {
      wins++;
    }
      losses = 10 - arr.length;

    $("body").html("<h1>Correct: "+wins+"</h1><h2>Wrong: "+losses+"</h2>");
   }

   


    function run() {
        intervalId = setInterval(decrement, 1000);
        // decrement();
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

    // run();

    function stop() {
        intervalId = clearInterval(intervalId);

        //game over screen display scores
        // if (intervalId === 0) {

        // }
    

}

// $( "input" ).on( "click", function() {
//   $( "#log10" ).html( $( "#questionTenContainer input:checked" ).val());

// });


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