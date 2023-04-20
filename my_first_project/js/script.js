alert("hello!");
function setup(){
    createCanvas(500,500);
    canvas.parent
    background(100);
}
function draw(){
    noStroke();
    let speedx=1;
    let speedy=random(-2,2);
    circle(width/2+speedx,height/2+speedy,50);
}