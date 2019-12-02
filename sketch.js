var s;
var scl = 10;
var stage = 1;
var items;
var counter;

function setup() {
  createCanvas(400, 400);
  background(220);
  
  s = new Square();
  pickLocation();
  //items = createVector(random(width),random(height));
  
}

function pickLocation(){
  var rows = floor(width/scl);
  var cols = floor(height/scl);
  items = createVector(floor(random(cols)), floor(random(rows)));
  items.mult(scl);
}

function draw() {
  if(keyCode === ENTER){
    stage = 2;
    newStage(); 
  }
  else if(stage == 1){
    background(220);
    textSize(12);
    fill(0, 102, 153);
    text('Press ENTER to go to the past', 200, 200);
    
  }
  //else if(stage == 2){
    //newStage();
  //}
  else if(key === 'r'){
    stage = 1;    
  }
  if(s.collect(items)){
    pickLocation();
  }
  fill(255, 0 ,110);
  rect(items.x, items.y, scl, scl);
  s.update();
  s.show();
  
  
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0,-2);
  }
  else if(keyCode === DOWN_ARROW){
    s.dir(0,2);
  }
  else if(keyCode === LEFT_ARROW){
    s.dir(-2,0);
  }
  else if(keyCode === RIGHT_ARROW){
    s.dir(2,0);
  }
  else if(keyCode === ENTER){
    newStage();
  }
}

function newStage(){
  //background(120,210,92);
  background(10,10,10);
  textSize(12);
  fill(0, 102, 153);
  text('Press r to go to the present', 200, 200);
}

function Square(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  
  }
  
  this.collect = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if(d < 1){
      return true;
    } else{
      return false;
    }
  }
  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    this.x = constrain(this.x,0,width-10);
    this.y = constrain(this.y,0,width-10);
    this.xspeed = 0;
    this.yspeed = 0;
  }

  this.show = function(){
    fill(255);
    rect(this.x, this.y,10,10);
  }
}