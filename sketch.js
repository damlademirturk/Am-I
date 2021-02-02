//DamlaDemirtürk  "Am I"
//Creative Coding Fall2020 @Yaşar University VCD
//Instructor: Ceren Kayalar

//Brief: My aim with this project is to define our facial
//features in an interactive way and to show them in a point-by-point way.
//I divided the screen in half to view it comfortably.


//Technical Info: Thanks to faceapi, we can determine the points of our face.
//And in this way, our image is formed.

//Additional Resources:
//I. https://github.com/justadudewhohacks/face-api.js/
//II. https://t.co/IFDfFVe4hL
//III. https://www.youtube.com/watch?v=40Me1-yAtTc

//Inspirations:
//I. https://sonarplusd.com/en/programs/barcelona-2018/areas/realities-d/mas-que-la-cara-and-other-ar-experiments-by-zach-lieberman
//II. https://itp.nyu.edu/classes/cc-f19/production-3/
//III: https://github.com/stc/face-tracking-p5js



//Github:

//"Am I"

let faceapi;
//let mic;
//let micLevel;
let video;
let detections = [];




//forcanvas
 function setup() {

  // mic = new p5.AudioIn();
   //mic.start();

  createCanvas(400, 300);


//creat the video and start face tracking
  video = createCapture(VIDEO);
  video.size(width, height);

//landmarks, expression, descriptors
  const faceOptions = { withLandmarks: true, withExpressions: true, withDescriptors: true };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

//start detecting faces
function faceReady() {
  faceapi.detect(gotFaces);
}

//faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result;
  faceapi.detect(gotFaces);
}

//draw everything, and background
function draw() {
  background(0);

//look at the face and draw points
  if (detections.length > 0) {
  let points = detections[0].landmarks.positions;
  for (let i = 0; i < points.length; i++) {

//color'sandybrown

    stroke(244, 164, 96);
    strokeWeight(2);
    point(points[i]._x, points[i]._y);

      //micLevel = mic.getLevel();
      //console.log(micLevel);
      //strokeWeight(micLevel * 200)
    }
  }

}
