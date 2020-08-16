var myX;
var myY;

webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    myX = data.x; //these x coordinates are relative to the viewport
    myY = data.y; //these y coordinates are relative to the viewport
    console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();

webgazer.showPredictionPoints(false);

webgazer.setTracker("TFFacemesh"); //set a tracker module

webgazer.setRegression("weightedRidge"); //set a regression module
//other options: ridge, weightedRidge, threadedRidge

window.saveDataAcrossSessions = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(234);
}

function draw(){
  background(234);
  ellipse(myX, myY, 40, 40);
}

window.onbeforeunload = function(){
  
  webgazer.end(); //saves the data even if you reload the page
  window.localStorage.clear(); //deletes the data for a fresh session or reload
  
}