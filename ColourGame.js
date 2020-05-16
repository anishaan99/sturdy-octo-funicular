var numSquares=6;
var colors=generateRandomColor(numSquares);
var square= document.querySelectorAll(".square");
var colorPicker=pickColor();
var colorSelector=document.getElementById("colorSelector");
colorSelector.textContent=(colorPicker);
var modeSelector=document.querySelectorAll(".mode");
var messageDisplay=document.getElementById("messsage");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");

resetButton.addEventListener("click",function(){
   reset();
});
for(var i=0;i<modeSelector.length;i++){
    modeSelector[i].addEventListener("click", function(){
        modeSelector[0].classList.remove("selected");
        modeSelector[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent=="Easy"){
            numSquares=3;
        }
        else{
            numSquares=6;
        } 
        reset();

    });
};
function reset(){
    colors=generateRandomColor(numSquares);
    colorPicker=pickColor();
    colorSelector.textContent=colorPicker;
    messageDisplay.textContent="";
    resetButton.textContent="New Colors"
    for(var i=0;i<square.length;i++)
    {
        if(colors[i]){
            square[i].style.display="block";
            square[i].style.backgroundColor=colors[i];
        }
        else{
            square[i].style.display="none";
        }
    }
    h1.style.background="steelblue";
}

for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click", function(){
        var colorClicked=this.style.backgroundColor;
        if(colorClicked==colorPicker){
            messageDisplay.textContent=("CORRECT!");
            h1.style.background=colorClicked;
            resetButton.textContent="PLAY AGAIN?"
            changeColor(colorClicked);
        }
        else{
                this.style.backgroundColor= "#232323";
                messageDisplay.textContent=("TRY AGAIN");
        }
    });
}

function changeColor(color){
    for(var i=0;i<color.length;i++){
        square[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random() *256);
    var g=Math.floor(Math.random() *256);
    var b=Math.floor(Math.random() *256);
    return "rgb("+ r + ", " + g +", " +b+")";
}
 