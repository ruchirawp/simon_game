// alert("this shit working");

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0; 


function nextSequence(){

    userClickedPattern = [];

    level++;
    $("h1").text("level " + level);

    var randomNum = Math.floor(Math.random() * 4) ;
    var randomChosenColour = buttonColors[randomNum];
    gamePattern.push(randomChosenColour);

    //selecting and animating the chosen button
    console.log(gamePattern);
    playSound(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    

}

function playSound(name){

    // alert(name);

    switch (name) {
        case "red":
          var red = new Audio("./sounds/red.mp3");
          red.play(); //add stuff herre
          break;
    
        case "blue":
          var blue = new Audio("./sounds/blue.mp3");
          blue.play(); //add stuff herre
          break;
    
        case "green":
          var green = new Audio("./sounds/green.mp3");
          green.play(); //add stuff herre
          break;

        case "yellow":
            var yellow = new Audio("./sounds/yellow.mp3");
            yellow.play(); //add stuff herre
            break;

        default:
          alert(name);
          break;
      }

}

//adding onclick to the buttons
$(".btn").on("click", function(event){

    if (gamePattern.length > 0){
        var userChosenColor = event.currentTarget.id;
        userClickedPattern.push(userChosenColor);
        // console.log(userClickedPattern);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        

        currentIndex = userClickedPattern.length-1;
        checkAnswer(currentIndex);

    }


});

//button click animation 
function animatePress(currentColor){
    // console.log(currentColor);

    $("#"+currentColor).toggleClass("pressed");

    setTimeout(function() {
        $("#"+currentColor).toggleClass("pressed");
    }, 100);
}


// STARTING THE GAME

$(document).on("keydown", function(e){
    if (level == 0){
        $("h1").text("level " + level);
        nextSequence();

    }
});


//GAME LOGIC 
function checkAnswer(currentIndex){


    if (userClickedPattern[currentIndex] == gamePattern[currentIndex]){
        console.log("correct");
        if (currentIndex == gamePattern.length -1){
            setTimeout(nextSequence,1000);
        }
    }
    else{
        console.log("incorrect");
        gameOver();
    }




}


function gameOver(){

    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play(); //add stuff herre

    $("body").toggleClass("game-over");

    setTimeout(function() {
        $("body").toggleClass("game-over");
    }, 200);

    console.log("gameover");
    $("h1").text("Game Over, Press a key to restart");

    newGame();


}

function newGame(){
    gamePattern = [];
    userClickedPattern = [];
    level=0;
}
