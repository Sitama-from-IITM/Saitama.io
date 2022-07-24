// For Dice 1
var randomNumber1 = Math.ceil(Math.random() * 6);

var randomImageSource1 =  `images/dice${randomNumber1}.png`;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", randomImageSource1);

// For Dice 2
var randomNumber2 = Math.ceil(Math.random() * 6);

var randomImageSource2 =  `images/dice${randomNumber2}.png`;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", randomImageSource2);

// Declaring Winner
heading = document.querySelector("h1").innerHTML;

if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = '🚩 Player 1 Wins!';
} else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML= 'Player 2 🚩 Wins!';
} else {
    document.querySelector("h1").innerHTML = 'Draw!';
}

// Refresh using click on page
document.addEventListener("click", reload);

function reload(){
    window.location.reload(true);
}