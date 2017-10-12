var canvas;


function setup() {
  canvas = createCanvas(600, 1800);
  canvas.position(150,300);
  //background (250,250,100, 65);


}

function draw () {
  //background (250,250,100, 65);
  noStroke();
  fill(255, 0, 0);
  // ellipse(400, 200, 50, 50);


  strokeWeight(8);
  stroke(150, 219, 10,20); /*green*/

  for (let i = 0; i < 40; i++) {
    line(0, 20 * (i+1), width, 20* (i+1));
  }



}
