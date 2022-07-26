const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;

// Detecting when a key is pressed
$(document).click(nextSeqence);

// Definining nextSequence function
function nextSeqence(){

    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];

    // Animating flash an element
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing the sound of random element
    var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
    audio.play();

    $("h1").text("Level " + level);
    level++;
    console.log(level);
};

// When User Clicks
$(".btn").click(handlerFunction);

function handlerFunction(e) {
    var userChosenColour = e.target.getAttribute("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
};

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
};

function animatePress(currentColour) { 
    $("#" + currentColour).addClass("pressed");
    setTimeout(() => { $("#" + currentColour).removeClass("pressed"); }, 100);
};