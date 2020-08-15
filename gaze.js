window.onload = function() {
  
  webgazer.setRegression('weightedRidge') //ridge, weightedRidge, threadedRidge, linear
  
  .setTracker("TFFacemesh"); //set tracker module clmtracker
  
  .setGazeListener(function (data, clock) {
    // data is object containing x and y key, prediction coordinates
    // clock is elapsed time in milliseconds since webgazer.begin() was called
    
  }).begin()
  
  .showPredictionPoints(true); 
  //shows a square every 100 milliseconds where prediction is//

}