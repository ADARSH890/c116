noseY = 0;
noseX = 0;


function preload(){
clown_nose=loadImage("clown1.png");
moustache=loadImage("moustache1.png");
sun_glass=loadImage("goggles.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);


 
}
function modelLoaded(){
    console.log("model Loaded");

}

function gotposes(results){
    if(results.length > 0 ){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);

    }
}
function draw(){
    image(video,0,0,300,300);
   image(clown_nose,noseX-22,noseY-20,50,30);
   image(moustache,noseX-24,noseY-5,50,30);
   image(sun_glass,noseX-60,noseY-60,120,90);
    
    }
    function take_snapshot(){
        save("myselfie.png");

    }