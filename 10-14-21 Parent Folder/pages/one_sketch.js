let circleX = 100


function setup() {
  createCanvas(700, 1080);
}

function mousePressed() {
  circleX = 50;
  
}

function draw() {
  background(0);
  
  
  //rectangle
  r = map (mouseY, 440, 600, 0, 255)
  
  //erase comment on //fill (r)
  fill (r, 0, 0)
  
  //erase r = fill (255, 0, 0)
  
  
  rect (200, 700, 300, 300)
  
  
  //function mousePressed() {
  
    //bulb ellipse
  noStroke()
  setAlpha = random(100, 200)
  fill (233, 245, 0, setAlpha)
  ellipse (mouseX, mouseY, 150)
  
    noStroke()
  setAlpha = random(40, 60)
  fill (233, 245, 0, setAlpha)
  ellipse (mouseX, mouseY, 250)
  
  
  noStroke()
  fill (255, 225, 0, 255)
  //ellipseSize = random(5, 20)
  ellipseRadius = random(5, 20)
  ellipse (mouseX, mouseY - 8, 5, ellipseRadius)
  
  
  fill (255, 0, 0)
  rect (mouseX - 4, mouseY, 8, 35)
  
  g = map (mouseY, 440, 600, 0, 255)
  fill (0, g, 0)
  circle(circleX, 900, 120);
  circleX = circleX + 1
  
  
  
}