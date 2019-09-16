
// Variables============================================
// ====================================================================================================================


// Ready document 
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
    },
    {
        question: "One ostrich egg is equal to the weight of how many chicken eggs?",
        choices: ["24", "12", "6", "3"],
        correct: "24"
    },
    {
        question: "What color are American Robin's eggs?",
        choices: ["white", "blue", "pink", "green"],
        correct: "blue"
    },
    {
        question: "BONUS: What was Long John Silver's parrot's name?",
        choices: ["Captain Flint", "Chocobo", "Blood-Wing", "Sheldon"],
        correct: "Captain Flint"
    }]

    // object with game data
    var gameData = {
        points: 0,
        timeLeft: 15,
        qCounter: -1,
    }

    // timer interval var
    var intervalId;

    // Functions============================================
    // ====================================================================================================================

    // function that displays my questions

    function displayQ() {

        // increase qcounter by 1, this is how I change my question using an array of OBJ's
        gameData.qCounter++
        gameData.timeLeft = 15;
        countDown();
        $('.gameArea').empty()
        $('.choicesArea').empty()
        $('.timerArea').empty()
        $('.correctArea').empty()
        $('.gameArea').append(questionArr[gameData.qCounter].question)

        // loops through my array of questions.choices of each question depending on what the index og qcounter is on
        for (var i = 0; i < questionArr[gameData.qCounter].choices.length; i++) {
            
            // stopping the loop after questions are done?
            if (questionArr[gameData.qCounter[i]] > questionArr.length) {
                stop();
                swal("Game Over!")
            }

            // append the correlating choices to the DOM as buttons
            $('.choicesArea').append(`<button class="btn btn-primary btn-block buttons">${questionArr[gameData.qCounter].choices[i]}</button>`)
        }

        // my timers and correct guesses appended to DOM
        $('.timerArea').append(`<div class="timeLeft">Time Left: ${gameData.timeLeft}</div>`)
        $('.correctArea').append(`<div class="correctNum">Correct: ${gameData.points}</div>`)

    };

    // Game Start============================================
    // ====================================================================================================================

    // hide game Area jumbo
    $('.gameJumbo').css("display", "none")

    // Start Button Function starts the game 
    $('.startButt').click(function () {

        // test click
        console.log("click")

        // game start function
        $('.startButt').css("display", "none")
        $('.gameJumbo').css("display", "block")
        displayQ();
        countDown();
    })

    // append questionArr index of 0 which starts us at the first question
    $('.gameArea').append(questionArr[0])

    // click function on my buttons and logs user guess  
    $(document).on("click", ".buttons", function (event) {
        var userGuess = $(this).text();

        // Testing user guess click
        console.log(userGuess);
        console.log(questionArr[gameData.qCounter].correct);

        // is correct display correct alert and move to next question
        if (userGuess === questionArr[gameData.qCounter].correct) {
            swal("Correct!")

            // adding one to my Question counter pulling from question Array 
            console.log("You win!")
            gameData.points++
            displayQ()
        }
        else if (userGuess !== questionArr[gameData.qCounter].correct) {
            swal("Incorrect!")
        }
    })

    // Timers============================================
    // ====================================================================================================================

    function countDown() {

        clearInterval(intervalId);

        intervalId = setInterval(decrement, 1000)
    };

    function decrement() {
        // Decrease time left by 1
        gameData.timeLeft--

        // if out of time move to next question and alert user
        if (gameData.timeLeft === 0) {
            swal("You ran out of time!")
            clearInterval(intervalId);
            displayQ();
        };
        $('.timeLeft').html("Time Left: " + gameData.timeLeft);
    }

    // function to stop timer(NOT WORKING CURRENTLY UGH)
    function stop() {

        clearInterval(intervalId)
        swal("game over!");
    }
});


// stuff to go over, timer stop function, stopping clock when alert is displayed(starting it when screen/alert is clicked), errors at end of code when questions are done