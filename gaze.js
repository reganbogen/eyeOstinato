//Kalman filter default to ON

window.applyKalmanFilter = true;

//Don't save data on page reload, each instance is new, no database
window.saveDataAcrossSessions = false;

window.onload = async function() {
  
  webgazer.params.showVideoPreview = true;
  const webgazerInstance = await webgazer.setRegression('ridge')
  .setTracker('TFFacemesh')
  .begin();
  
  webgazerInstance.showPredictionPoints(false);  
  /* shows a square every 100 milliseconds where current prediction is */
  
  // Add the SVG component on the top of everything.
  setup
}