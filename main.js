function preload()
{

}
function setup()
{
    canvas = createCanvas(640 , 480);
    canvas.position(300 , 150);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw(){
    image(video,0,0,640,480);
    fill(255,0,0);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    
    tint(tint_color);
}
function take_snapshot() {
    save('student_name.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}