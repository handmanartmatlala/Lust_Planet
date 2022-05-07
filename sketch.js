let church; 
let soil; 
let church1;

function preload(){
  church = loadModel('Church.obj')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  soil = loadImage('soil.jpg'); 
  church1 = loadImage('church1.png');
}

function draw() {
  background(255, 238, 191);
  orbitControl();
  
    camera(0, 0, 0 , 0, 0, 0, 0, 1, 0);  camera(0,-80, 450, 0, 0, 1, 0, 1, 0);
  //noStroke(); 
  
  push(); 
  texture(soil); 
  box(1100, 10, 900);
  pop();
  
  push();
  translate(0,-10,0); 
  scale(5); 
  rotateX(3.125)
  rotateY(1.6)
  fill(212, 166, 106);
  model(church); 
  pop(); 
  
   push();
  translate(-220,-10,-100); 
  scale(5); 
  rotateX(3.125)
  rotateY(1.6)
  fill(212, 166, 106);
  model(church); 
  pop();

  push();
  translate(220,-10,-100); 
  scale(5); 
  rotateX(3.125)
  rotateY(1.6)
  fill(212, 166, 106);
  model(church); 
  pop();
  
  push();
  translate(220,-50,100); 
  scale(5); 
  //rotateX(3.125)
  //rotateY(1.6)
  texture(church1);
  plane(30,20); 
  pop();
  
  push();
  translate(-220,-50,100); 
  scale(5); 
  //rotateX(3.125)
  //rotateY(1.6)
  texture(church1);
  plane(30,20); 
  pop();



}