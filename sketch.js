let img;

function preload(){
  img = loadImage("HeadShotSmall.jpg");

}

function setup() {
  createCanvas(480, 640);
  image(img, 0, 0);
 
}

function draw() {
 // img.loadPixels();
 filter(BLUR, 0.1);

}
