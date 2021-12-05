function preload(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.position(650,300);
video = createCapture(VIDEO);
video.hide();


}

function draw(){

    image(video,100,100,440,280);
    fill("red");
    circle(40, 440, 70);
    circle(40, 40, 70);        
    circle(600, 440, 70);
    circle(600, 40, 70);
    fill("green");
    rect(25 ,70 ,30,340);
    rect(70, 20, 500, 30);
    rect(70, 430, 500, 30);
    rect(590, 70, 30, 340);
    


}

function take_snapshot(){
save("selfie.png");

}


