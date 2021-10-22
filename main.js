function preload()
{

}

function setup()
{
 canvas=createCanvas(200,200);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
}

function draw()
{
 image(video,0,0,200,200);
 classifier.classify(video,gotResut);
}

function modelLoaded()
{
 console.log('Model is activated');
}

function gotResult(error, results)
{
  if (error) {
      console.error(error);
  } else {
      console.log(results);
      document.getElementById("object_name").innerHTML = results[0].label;
      document.getElementById("object_accuaracy").innerHTML = results[0].confidence.toFixed(3);
    
  }
}