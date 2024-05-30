let sound, amplitude;

function preload() {
  sound = loadSound("NorthernCardinalisolated.wav");
}

function setup() {
  let cnv = createCanvas(400,400);
  cnv.mouseClicked(togglePlay);
  amplitude = new p5.Amplitude();
}

function draw() {
  
  
  background('#C62710'); // Moved background to the beginning
  noStroke();

  
  let size = 2; // Default size
  
  if (sound.isPlaying()) {
    let level = amplitude.getLevel();
    size = map(level, 0, 1, 0, 300);
  }  

  //Wing
  fill('#8A4436');
  ellipse(width / 2, height / 2, size * 100, size * 100);

  //Belly
  fill('#E74B31');
  ellipse(width / 2, height / 2, size * 70, size * 70);
  
   //Head
  fill('#2D0C0A');
  ellipse(width / 2, height / 2, size * 30, size * 30);
  
  //Beak
  fill('#F6321C');
  ellipse(width / 2, height / 2, size * 10, size* 10);
  
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
  }
}
