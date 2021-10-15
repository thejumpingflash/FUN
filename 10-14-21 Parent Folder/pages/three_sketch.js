//SOURCES start

//The Coding Train:
//3.3: Else and Else if, AND and OR - p5.js Tutorial
//3.4: Boolean Variables - p5.js Tutorial
//9.22: Custom Shapes - p5.js Tutorial

//Perlin Landscape, Tega Brain

//p5.js Reference - (push/pop, translate, rotate, scale, triagnle)

//SOURCES end


//BUTTON functions A
var on = true

var lol = false

//REWIND A
var no = false

//OFF SCREEN yscale
let ok = 135

//DARK ROOM
let aa = 400

let ab = 60
  
let ac = 30
  
let ad = 15
  
let ae = 200
  
let af = 65
  
let ag = 140
  
let ah = 35
  
let ai = 35
  
let aj = 200
  
let ak = 200
  
let al = 140

let am = 176
    
let an = 176
  
let ao = 176
  
let ap = 176
  
let aq = 176
  
let ar = 176
  





//for greenlines
var n=0.1;

//SETUP start
function setup() {
  createCanvas(800, 400);

//SETUP end
}
//DRAW start
function draw() {

  
//DARK real yellow wall
noStroke()
      fill(77, 67, 8)
  rect (0, 0, 800, 400)  
  
//real yellow wall
noStroke()
      fill(255, 251, 227)
  rect (0, 0, 800, aa)
  
//DARK Lightswitch frame C1
  stroke(0, 120)
  fill(200)
  rect (100, 55, 40, 60)
  
//Lightswitch frame C1
  stroke(0, 120)
  fill(255)
  rect (100, 55, 40, ab)
  
//DARK Lightswitch switchshade C1
  stroke(0, 120)
  fill(160)
  rect (113, 70, 14, 30)
  
//Lightswitch switchshade C1
  stroke(0, 120)
  fill(140)
  rect (113, 70, 14, ac)
  
//DARK Lightswitch switchlight C1
  stroke(0, 120)
  fill(80)
  rect (113, 70, 14, 15)  
  
//Lightswitch switchlight C1
  stroke(0, 120)
  fill(230)
  rect (113, 70, 14, ad)
  
    //REWIND B
   if (no) {
  n++
   } else {
  n--
   }
  
//BUTTON functions B
  if (on) {
  ok = 135
   } else {
  ok = 0
   }  
  
   if (lol) {
   aa =400, ab = 60, ac = 30, ad = 15, ae = 200, af = 65, ag = 140, ah = 35, ai = 35, aj = 200, ak = 200, al = 140, am = 176, an = 176, ao = 176, ap = 176, aq = 176, ar = 176 
   } else {
   aa = 0, ab = 0, ac = 0, ad = 0, ae = 0, af = 0, ag = 0, ah = 0, ai = 0, aj = 0, ak = 0, al = 0, am = 120, an = 117, ao = 117, ap = 120, aq = 117, ar = 117
   } 
  
  
//DARK carpet
  noStroke()
      fill(26, 59, 97)
  rect (0, 270, 800, 200) 
  
//carpet
  noStroke()
      fill(61, 157, 212)
  rect (0, 270, 800, ae)
  
//DARK shelftop
  noStroke()
      fill(77, 50, 15)
  rect (200, 145, 400, 65)
  
//shelftop
  noStroke()
      fill(145, 96, 31)
  rect (200, 145, 400, af)
  
//DARK shelfbottom
  noStroke()
      fill(38, 26, 9)
  rect (200, 210, 400, 140) 
  
//shelfbottom
  noStroke()
      fill(84, 58, 22)
  rect (200, 210, 400, ag)
  
//black tv background
  noStroke()
  fill(0)
  rect (300, 0, 199, 150)
  
// draw hills(2,0.2);
    for (var x=303.3; x<497; x=x+4) {
        var p=(x+n)/200; //calculate noise variable for each x
    var y = noise(p); //generate noise value
      //stroke(205, 0, 110)
      stroke(62, 255, 48)
  
//remember that noise generate values from (0,1) so that the above function will produce values from 0-1 (which we can multiply by height)
  
//draw a line at x that goes from bottom of screen to y value
   line(x, 148, x, y*150);
      
    }

//DARK monitor bottom
  noStroke()
      fill(80)
  rect (300, 150, 200, 35)      
      
//monitor bottom
  noStroke()
      fill(110)
  rect (300, 150, 200, ah)
      
//DARK monitor top
  noStroke()
  fill(80)
  rect (300, -20, 200, 35)    
      
//monitor top
  noStroke()
  fill(110)
  rect (300, -20, 200, ai)
      
//DARK monitor leftside
  noStroke()
  fill(80)
  rect (260, -25, 40, 200)      
      
//monitor leftside
  noStroke()
  fill(110)
  rect (260, -25, 40, aj)
      
//monitor rightside
      noStroke()
  fill(80)
  rect (499, -25, 40, 200)      
      
//monitor rightside
      noStroke()
  fill(110)
  rect (499, -25, 40, ak)
 
//DARK remotebottom
  noStroke()      
  fill (48, 47, 47)      
  rect (130, 340, 270, 140)
      
//remotebottom
  noStroke()
  fill(97, 97, 97)
  rect (130, 340, 270, al)
      
//DARK remotetop
  beginShape();
  stroke(120, 117, 117)
  fill(120, 117, 117)
  vertex(131, 340);
  vertex(260, 200);
  vertex(380, 200);
  vertex(399, 340)
  endShape();      
      
//remotetop
  beginShape();
  stroke(am, an, ao)
  fill(ap, aq, ar)
  vertex(131, 340);
  vertex(260, 200);
  vertex(380, 200);
  vertex(399, 340)
  endShape();
      
      
       //remote button off
      stroke(4)
      fill(148, 0, 3)
  rect (270, 205, 45, 20)
  
  //remote button on
      stroke(4)
      fill(148, 0, 3)
  rect (315, 205, 45, 20)
  
  
   //remote button rewind
      stroke(4)
      fill(148, 0, 3)
  rect (240, 245, 60, 25)
  
  //remote button fastforward
      stroke(4)
      fill(148, 0, 3)
  rect (300, 245, 60, 25)
  
    
      
//OFFSCREEN must be last
  fill(0);
  // fill(255, 0, 0);
  noStroke();
  rect(300, 15, 199, ok);
  
  push()
  fill(0)
  scale(0.3, 0.36);
  translate(1140, 672);
  rotate(PI / 2.0);
  triangle(15, 60, 43, 5, 71, 60); 
  pop()
  
  push()
  fill(0)
  scale(0.39, 0.3);
  translate(670, 805);
  rotate(PI / 7.0);
  triangle(15, 60, 43, 5, 71, 60); 
  pop()

      
 


  


//increase noise variable
// n++;
no
//DRAW end
}
//FUNCTION mousePressed start
function mousePressed(){
  if (mouseX > 270 && mouseX < 360 && mouseY > 203 && mouseY < 225){
  on = !on;
  }
  if (mouseX > 240 && mouseX < 360 && mouseY > 244 && mouseY < 270){ 
  no = !no;   
  }
  if (mouseX > 113 && mouseX < 128 && mouseY > 70 && mouseY < 100){ 
  lol = !lol;   
  }  
//FUNCTION mousePressed end 

//THE END
}



