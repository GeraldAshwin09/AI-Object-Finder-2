status-"";

function setup()
{
canvas= createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.size(380, 380);
video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',  modelLoaded)
document.getElementById("status").innerHTML = "Status : Detecting Objects ";
}

function draw()
{
    image(video,0,0,400,400)
}

function modelLoaded()
{
    console.log('Model Loaded! ');
    status = true;
}