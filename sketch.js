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
  
  background('#C62710');
  noStroke();

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600);
  
  fill('#000000')  
  ellipse(width/2, height/2, size*150, size*150);
   
  fill('#FF5722')  
  ellipse(width/2, height/2, size*40, size*40);
 


}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}
