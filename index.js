var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var body = document.querySelector("body");

init();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
		for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[3].classList.remove("selected");
			this.classList.add("selected");
			// this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			if(this.textContent === "Easy"){
				numOfSquares = 3;
			} else if(this.textContent === "Hard"){
				numOfSquares = 9;
			} else if(this.textContent === "Expert"){
				numOfSquares = 12;
			}
			 else {
				numOfSquares = 6;
			}
			reset();

		});
}
}
function setupSquares(){
		for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	};
}
function reset(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "Select Color";
	resetButton.classList.remove("selected");
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		};
	}
	body.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;


function changeColors(color){
	for( var i = 0; i < colors.length; i++)
		squares[i].style.background = color;
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return"rgb(" + r + ", " + g +", " + b + ")";
}
