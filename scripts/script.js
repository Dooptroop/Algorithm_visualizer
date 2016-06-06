/**
 * Created by mdupree on 01/06/16.
 */
// Set up!
var a_canvas = document.getElementById("a");
var ctx = a_canvas.getContext("2d");
var width = 800;
var height = 600;
var randomNumber = Math.floor(Math.random() * 8);
var bricks = [];

//create an array of bricks
for(var i = 0; i < width; i++){
  if(i % 10 == 0){
    console.log(i);
    var rand = Math.floor(Math.random() * 7);
    rand = rand * 100;
    var entry = height - rand;
    bricks.push(entry);


  }
}


//print the bricks from the array
var z = 0;
for(var i = 0; i < bricks.length; i++){
    ctx.fillStyle = "#FFA500";
    ctx.fillRect(z, bricks[i], 10, height);

  z+=10;
}
//draw rect

ctx.stroke();