let dancer
function setup() {
  //let canvas = createCanvas(500, 400);
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  background(0);
  dancer = new TaojieDancer(width/2, height/2);
}

function draw() {
  background(0)
  //stroke(100);
  //circle(width/2,height/2,30);
  dancer.update();
  dancer.display(); 
  stroke(255)
}

class TaojieDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY+20;
    // add properties for your dancer here:
    this.s=100;
    this.x1=0;
    this.y1=0;
    this.LHmoveangle=0;
    this.RHmoveangle=0;
    this.LFmoveangle=0;
    this.RFmoveangle=0;
    this.LEyemove=0;
    this.REyemove=0;
    this.xeye=0;
    this.yeye=0;
    //..
    //..
    //..
    
  }  
  update(){
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.dance()
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    
    
    // ******** //
    // ⬇️ draw your dancer here ⬇️
  colorMode(HSB,100)
  //translate(this.x, this.y);
  this.drawBody(this.x1,this.y1,this.s);
  this.drawEars(this.x1,this.y1,this.s,1);
  this.drawEyes(this.x1,this.y1,this.s);
  this.drawNose(this.x1,this.y1,this.s);
  this.drawLeftFeet(this.x1,this.y1,this.s);
  this.drawRightFeet(this.x1,this.y1,this.s);
  this.drawLeftHand(this.x1,this.y1,this.s);
  this.drawRightHand(this.x1,this.y1,this.s);
    
    
    
    
    // ⬆️ draw your dancer here ⬆️
    
    
    
    
    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()
   
    
    
    pop();
  }  
  
//     drawCreature() {
//   push();
//   colorMode(HSB,100)
//   //translate(this.x, this.y);
//   this.drawBody(0,0,this.s);
//   this.drawEars(0,0,this.s,1);
//   this.drawEyes(0,0,this.s);
//   this.drawNose(0,0,this.s);
//   this.drawLeftFeet(0,0,this.s);
//   this.drawRightFeet(0,0,this.s);
//   this.drawLeftHand(0,0,this.s);
//   this.drawRightHand(0,0,this.s);
//   pop();
// }

  drawBody(x,y,s){
  push();
  translate(x,y);
  noStroke();
  fill(358/3.6,13,95);
  ellipse(x,y-10,s*1.2,s*1.3);
  pop();
}
  drawEars(x,y,s,speed){
  push();
  translate(x-s/200*60,y-s/200*130);
  rotate(0.5*sin(frameCount*0.1));
  noStroke();
  fill(358/3.6,13,95);
  ellipse(0,0,s*0.1,s*0.2);
  pop();
  push();
  translate(x+s/200*70,y-s/200*125);
  rotate(0.4*sin(PI/2-frameCount*0.1));
  noStroke();
  fill(358/3.6,13,95);
  ellipse(0,0,s*0.1,s*0.2);
  pop();
}
  drawEyes(x,y,s){
  push();
  translate(x,y);
  noStroke()
  fill(360)
  circle(s/200*(-35),s/200*(-78),s/200*30)
  circle(s/200*35,s/200*(-78),s/200*30)
  fill(0);
  this.xeye=s/200*(-35.5)+sin(frameCount*0.1)*s/200*(4.5)
  this.yeye=s/200*(-80)+cos(frameCount*0.15)*s/200*5
  //let xeye=map(mouseX,20,width-20,s/200*(-31),s/200*(-40));
  //let yeye=map(mouseY,20,height-20,s/200*(-75),s/200*(-85));
  circle(this.xeye,this.yeye,s*20/200);
  circle(this.xeye+s/200*70,this.yeye,s/200*20)
  pop();
}

  drawNose(x,y,s){
  push();
  translate(0,s/200*(-40));
  fill(358/3.6,38,95);
  noStroke();
  ellipse(x,y,s*0.25,s*35/200);
  fill(358/3.6,52,85);
  scale(x)
  ellipse(x+s/200*(-10),y,s/200*12,s*18/200)
  ellipse(s/200*10,y,s/200*12,s*18/200);
  pop()
}

  drawLeftFeet(x,y,s){
  push()
  translate(0,s/200*65);
  stroke(358/3.6,46,84,70);
  strokeWeight(s/200*8)
  noFill();
  rotate(this.LFmoveangle)
  arc(s/200*(-45),0,s/200*30,s/200*25,PI,0);
  pop();
  }
  drawRightFeet(x,y,s){
  push()
  translate(0,s/200*65);
  stroke(358/3.6,46,84,70);
  strokeWeight(s/200*8)
  noFill();
  rotate(this.RFmoveangle)
  arc(s/200*45,0,s/200*30,s/200*25,PI,0);
  pop();
  }
  drawLeftHand(x,y,s){
  push();
  translate(0,s/200*(-20));
  stroke(358/3.6,46,84,70);
  strokeWeight(s/200*4)
  noFill();
  rotate(this.LHmoveangle)
  arc(s/200*(-90),0,s/200*15,s/200*30,0,PI);
  pop()
  }
  drawRightHand(x,y,s){
  push();
  translate(0,s/200*(-20));
  stroke(358/3.6,46,84,70);
  strokeWeight(s/200*4)
  noFill();
  rotate(this.RHmoveangle)
  arc(s/200*90,0,s/200*15,s/200*30,0,PI);
  pop()
  }
  dance(){
    this.LHmoveangle=PI/10*sin(frameCount*0.1);
    this.RHmoveangle=PI/10*cos(frameCount*0.1);
    this.LFmoveangle=PI/10*sin(frameCount*0.2);
    this.RFmoveangle=PI/10*sin(frameCount*0.15);
    this.x1=3*PI/10*sin(frameCount*0.1);
    this.y1=15*PI/10*sin(frameCount*0.1);
  }
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
}

