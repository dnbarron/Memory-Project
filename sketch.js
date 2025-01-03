let img;
let xPixels;
let yPixels;
let newRed;
let newGreen;
let newBlue;
let dimFactor;
let pixSize;

function preload(){
  img = loadImage("HeadShotSmall.jpg");

}

function setup() {
  createCanvas(480, 640);
  image(img, 0, 0);
  frameRate(50);
}

function draw() {
  img.loadPixels();
  
  pixSize = floor(random(1, 4));
  dimFactor = random(0.5, 0.99);

  xPixels = floor(random(pixSize, img.width - pixSize));
  yPixels = floor(random(pixSize, img.height - pixSize));

  for (let x = 0; x <= pixSize; x++){
    for (let y = 0; y <= pixSize; y++){
      let loc = 4 * ((yPixels + y) * img.width + (xPixels + x));
      newRed = red(img.pixels[loc]) * dimFactor;
      newGreen = green(img.pixels[loc + 1]) * dimFactor;
      newBlue = blue(img.pixels[loc + 2]) * dimFactor;
      img.pixels[loc] = newRed;
      img.pixels[loc + 1] = newGreen;
      img.pixels[loc + 2] = newBlue;
    }
  }
  img.updatePixels();
  
  image(img, 0, 0);

}
