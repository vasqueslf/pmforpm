var song;
var img;
var letter = [];
var bubbles = [];
var count = 0;


function preload () {
  song = loadSound("femme.mp3");
    img = loadImage("ff.jpg");
    for (var i = 0; i < 13; i++) {
      letter [i] = loadImage ('letter' + i +'.png');
    }


}

function setup() {
  createCanvas (window.innerWidth, window.innerHeight);
  imageMode (CENTER);
  image (img, window.innerWidth/2, window.innerHeight/2);
  song.play();
}

function mousePressed(){
  var b = new Bubble (mouseX, mouseY, letter [count]);
   bubbles.push(b);
   count = (count + 1) % 13;
 }


function draw() {
  for (var i = bubbles.length -1; i>=0; i--){
    bubbles [i].update();
    bubbles [i].display();
}
 }
