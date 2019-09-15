
// Variables 
// =====================

// game date variable
// Ready document, add clicks here. 
$(document).ready(function () {
    // questions arr full of OBJ's
    var questionArr = [{
        question: "What bird has the largest wingspan?",
        choices: ["Golden Eagle", "Ruppell's Vulture", "Ostrich", "Wandering Albatross"],
        correct: "Wandering Albatross"
    },
    {
        question: "How many species of known birds are there?",
        choices: ["5,000", "10,000", "20,000", "40,000"],
        correct: "10,000"
    },
    {
        question: "What is a group of Owls called?",
        choices: ["Watch", "Brood", "Colony", "Parliament"],
        correct: "Parliament"
    },
    {
        question: "What bird has the longest life span?",
        choices: ["Ostrich", "Swan", "Cockatoo", "Parrot"],
        correct: "Parrot"
    }]
    var gameData = {
        points: 0,
        timeLeft: 15,
        qCounter: -1,
    }
    var intervalId;



    function displayQ() {
        gameData.qCounter++
        gameData.timeLeft = 15;
        countDown();
        $('.gameArea').empty()

        $('.gameArea').append(questionArr[gameData.qCounter].question)
        for (var i = 0; i < questionArr[gameData.qCounter].choices.length; i++) {
            $('.gameArea').append(`<button class="buttons">${questionArr[gameData.qCounter].choices[i]}</button>`)
        }
        $('.gameArea').append(`<div class="timeLeft">Time Left: ${gameData.timeLeft}</div>`)
        $('.gameArea').append(`<div>Correct: ${gameData.points}</div>`)
    };


    // Start Button Function starts the game 
    $('.startButt').click(function () {
        console.log("click")
        // game start function
        $('.startButt').css("display", "none")
        displayQ();
        countDown();
    })
    $('.gameArea').append(questionArr[0])
    // click function on my buttons and logs user guess  
    $(document).on("click", ".buttons", function (event) {
        var userGuess = $(this).text();


        // Testing user guess click
        console.log(userGuess);
        console.log(questionArr[gameData.qCounter].correct);
        if (userGuess === questionArr[gameData.qCounter].correct) {
            // adding one to my Question counter pulling from question Array 
            console.log("You win!")
            gameData.points++
            displayQ()
        }
        else {
            console.log("incorrect")
        }
    })

    function countDown() {

        clearInterval(intervalId);

        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        gameData.timeLeft--
        
        if (gameData.timeLeft === 0) {
            clearInterval(intervalId);
            displayQ();
        };
        $('.timeLeft').html("Time Left: " + gameData.timeLeft);
    }

});