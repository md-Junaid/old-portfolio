var numSquares=6;
var colors= genRandColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDis");
var msgDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyB=document.querySelector("#easyB");
var hardB=document.querySelector("#hardB");


easyB.addEventListener("click", function(){
	easyB.classList.add("selected");
	hardB.classList.remove("selected");
	numSquares=3;
	colors=genRandColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});

hardB.addEventListener("click", function(){
	easyB.classList.remove("selected");
	hardB.classList.add("selected");
	numSquares=6;
	colors=genRandColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
			squares[i].style.display="block";
	}
});
resetButton.addEventListener("click",function(){
	//generate all new colors
	colors=genRandColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";
	msgDisplay.textContent="";
	//change colors of squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background=colors[i];
	}
		h1.style.background="steelblue";
});
colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor=this.style.background;
		//compare color to pickedColor
		if(clickedColor===pickedColor){
			msgDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else{
			this.style.background="#232323";
			msgDisplay.textContent="Try Again";
		}
	});
}
function changeColors(color){
	//loop thru all squares
	for(var i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function genRandColors(num){
	//make an array
	var arr=[];
	//repeat num times
	for(var i=0; i< num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 -255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0 -255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0 -255
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}