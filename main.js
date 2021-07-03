function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(50, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{

    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 450, 20);

    rect(90, 420, 450, 20);

    fill(0, 128, 0)
    stroke(0, 128, 0)
    rect(40, 20, 20, 400)

    rect(500, 50, 20, 400)

    image(video, 230, 150, 220, 200)

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(510, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(505, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);
    
}