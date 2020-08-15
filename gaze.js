window.onload = function() {
  
  webgazer.setRegression('weightedRidge') //ridge, weightedRidge, threadedRidge, linear
  
  .setTracker("TFFacemesh"); //set tracker module clmtracker
  
  .setGazeListener(function (data, clock) {
    // data is object containing x and y key, prediction coordinates
    // clock is elapsed time in milliseconds since webgazer.begin() was called
    
  }).begin()
  
  .showPredictionPoints(true); 
  //shows a square every 100 milliseconds where prediction is//

  /* TO SETUP A VDEO IN A FRAME */

  let width = 320;
  let height = 240;
  let topDist = 'Opx';
  let leftDist = '0px';

  let setup = function(){

    let video = document.getElementById('webgazerVideoFeed');
    video.style.display = 'block';
    video.style.position = 'absolute';
    video.style.top = topDist;
    video.style.left = leftDist;
    video.width = width;
    video.height = height;
    video.style.margin = ‘0px’;

    webgazer.params.imgWidth = width;
    webgazer.params.imgHeigh = height;

    let overlay = document.createElement('canvas');
    overloay.id = 'overlay';
    overlay.style.position = ‘absolute’;
    overlay.width = width;
    overlay.height = height;
    overlay.style.top = topDist;
    overlay.style.left = leftDist;
    overlay.style.margin = ‘0px’;

    let myCanvas = get('canvas');
    myCanvas.width=screen.width;
    myCanvas.height=screen.height;

    document.body.appendChild(overlay);

    let cl = webgazer.getTracker().clm;

    function drawLoop(){

      requestAnimationFrame(drawLoop);
      overlay.getContext('2d').clearRect(0,0,width,height);

        if (cl.getCurrentPosition()) {
          cl.draw(overlay);
        }
    }
    drawLoop();
  };

  /* Check if webgazer is ready, call setup method */

  function checkIfReady() {

    if (webgazer.isReady()) {
      setup();
    } else {
      setTimeout(checkIfReady, 100);
    }

  }  
  setTimeout(checkIfReady, 100);
};

window.onbeforeunload = function(){
  
  webgazer.end(); //saves the data even if you reload the page
  window.localStorage.clear(); //deletes the data for a fresh session or reload
  
}

/* HELPER FUNCTION */

function get(id) {
  
  return document.getElementById(id);
  
}

function stopTracking() {
  
  webgazer.end(); //Save webgaze data  
  
}