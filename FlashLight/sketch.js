var currentColor;
var colors=["white","black"];

function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("black");
}

function draw()
{
  var x = 0;
    for (i = 0; i < colors.length; i++){
        var currentColor = new ColorButton(x, 0, 100, 50, colors[i] );  
        currentColor.appear();
        x = x + 100;
    }

  if(mouseIsPressed)
  {
    //add if else if conditions :

    changeBackground(currentColor);
  }
}

function changeBackground(currentColor){
  background(currentColor);
}