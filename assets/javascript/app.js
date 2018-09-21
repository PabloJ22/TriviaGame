$(document).ready(function () {
    var pause = setTimeout(function () {
        console.log(time)
    }, 1000);

    var answers = [$("input:radio")]
    var rightAnswers = [$("#number3"), $("#life4"), $("#limb1", "#limb2", "#limb3", "#limb4"), $("#drink1"), $("#eggs2")];
    var time = 45;
    var intervalId;
    var correctAnswers = 0;
    var incorrectAnswers = 0;


    $("#questionsBox, #timeBox").hide();

    $("#start").on("click", function () {
        $("#start").hide();
        $("#questionsBox, #timeBox").show();
        intervalId = setInterval(count, 1000);

    });






    function count() {

        time--;
        var converted = timeConverter(time);
        $("#timeBox").text("Time Remaining: " + converted);

        if (converted == "00:00") {
            clearInterval(intervalId);
            checkScore();

            $("#yourScore").text("Correct Answers: " + correctAnswers)
            $("#yourScore").append("<br>Incorrect Answers: " + incorrectAnswers)

            $("form").hide();
        }
    };

    function checkScore() {
        if ($("#number3").is(":checked")) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }

        if ($("#life4").is(":checked")) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }

        if ($("#limb1", "#limb2", "#limb3", "#limb4").is(":checked")) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }

        if ($("#drink1").is(":checked")) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }


        if ($("#eggs2").is(":checked")) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
        console.log(correctAnswers);
        console.log(incorrectAnswers);


    };


    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    };





});