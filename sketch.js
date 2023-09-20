function setup() {
    createCanvas(1000, 1000);
    background(232,212,184);



}

function draw() {
    fill(232,212,184);
    strokeWeight(2);
    triangle(0,0,680,465,1000,0);
    triangle(290, 540,0,1000,1000,1000);
    fill(0);
    strokeWeight(0);
    triangle(0, 0, 0, 300, 441, 300);
    triangle(545, 708, 1000, 700, 1000, 1000);
    fill(0,0,0);
    quad(441, 300, 680, 465, 545, 708, 290, 540);

}
