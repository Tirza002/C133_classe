img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    // fill("#FF0000");
    // text("Dog", 45, 75);
    // noFill();
    // stroke("#FF0000");
    // rect(30, 60, 450, 350);

    // fill("#FF0000");
    // text("Cat", 320, 120);
    // noFill();
    // stroke("#FF0000");
    // rect(300, 90, 270, 320);

    if (status!=""){
        for(var i = 0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: objeto detectado"
            fill("#FF0000")
            percent = floor(objects[i].confidence*100)
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector1 = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector1.detect(img, gotResult); 
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
