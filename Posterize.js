let colors = [];
let img;
let imgOriginal;

function preload(){
    img = loadImage("HeadShotSmall.jpg");
    imgOriginal = loadImage("HeadShotSmall.jpg");
}

function setup(){
    createCanvas(img.width * 2, img.height);
    img.filter(BLUR, 1);

    for (let r = 0; r <= 256; r += 20){
        for (let g = 0; g <= 256; g += 20){
            for (let b = 0; b <= 256; b += 20){
                colors.push([r, g, b]);
            }
        }
    }

    img.loadPixels();

        for (var x = 0; x < img.width; x++){
            for (var y = 0; y < img.height; y++){
                var index = (x + y * img.width) * 4;
                var r = img.pixels[index + 0];
                var g = img.pixels[index + 1];
                var b = img.pixels[index + 2];

                var closestColor = [3 * 255, []];
                for (color of colors){
                    var diff = abs(color[0] - r) + abs(color[1] - b) 
                    + abs(color[2] - b);
                    if (diff < closestColor[0]){
                        closestColor[0] = diff;
                        closestColor[1] = color;
                    }
                }
                img.pixels[index + 0] = closestColor[1][0];
                img.pixels[index + 1] = closestColor[1][1];
                img.pixels[index + 2] = closestColor[1][2];
            }
        }

    img.updatePixels();
}

function draw(){
    image(imgOriginal, 0, 0, width /2, height);
    image(img, width / 2, 0, width / 2, height);


}
