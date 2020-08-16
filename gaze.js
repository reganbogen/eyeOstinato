webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport
    console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();

webgazer.setTracker("TFFacemesh"); //set a tracker module

webgazer.addTrackerModule("newTracker", NewTrackerConstructor); //add a new tracker module

webgazer.setRegression("threadedRidge"); //set a regression module
//other options: ridge, weightedRidge, threadedRidge

webgazer.addRegressionModule("newReg", NewRegConstructor); //add a new regression module

webgazer.util.bound(prediction);
prediction.x;
prediction.y;