var number = 60;
var intervalId;
var wins = 0;
var losses = 0;
var noanswers = 0;
var answer;
var correct = ["1a", "2a", "3a", "4b", "5c", "6d", "7d", "8b", "9c", "10a"];

$('#jumbo').on('click', function() {
    $('#jumbo').hide();
    $('#q1').show();
    run();
});

function run() {
    intervalId = setInterval(decrement, 1000);

    for (let i = 0; i < correct.length; i++) {
        $("#q" + i + " input").on("click", function() {

            answer = $("#q" + i + " input:checked").val();

            if (answer) {
                $("#q" + i).hide();
                var next = i + 1;
                $("#q" + next).show();

                if (answer === correct[i - 1]) {
                    wins++;
                } else if (answer == null) {
                    noanswers++;
                } else if (answer !== correct[i - 1]) {
                    losses++;
                }
            }
        })
    }

    $("form").submit(function(e) {
        if (answer === correct[9]) {
            wins++;
        } else if (answer != correct[9]) {
            losses++;
        }
        stop();
    });
}

function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
    }
}

function stop() {
    intervalId = clearInterval(intervalId);
    $("body").html("<h5>Correct: " + wins + "</h5><h5>Wrong: " + losses + "</h5>");

}