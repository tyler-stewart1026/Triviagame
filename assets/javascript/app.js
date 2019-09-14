
// Variables 
// =====================

// game date variable
// questions arr full of OBJ's

// Ready document, add clicks here. 
$(document).ready(function () {

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
    }]

    var gameData = {
        points: 0,
        userGuess: " ",
        timeLeft: 0,
        qCounter: 0,
    }

    var displayQ = (function(){
        $('.gameArea').empty()
        $('.gameArea').append(questionArr[0].question)
        for (var i = 0; i  < questionArr[gameData.qCounter].choices.length; i++) {
            $('.gameArea').append(`<button class="buttons"> ${questionArr[gameData.qCounter].choices[i]} </button>`) 
        }
        gameData.qCounter++
    })
    


    $('.startButt').click(function () {
        console.log("click")
        // game start function
        $('.startButt').css("display", "none")
        displayQ();
    })
    $('.gameArea').append(questionArr[0])

    $('.buttons').click(function(event){
        
    })
});



// Question




