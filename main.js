var camera = document.getElementById("camera");

Webcam.set({
    width: 360, 
    height: 350, 
    image_format: "png", 
    png_quality: 90
});

Webcam.attach("#camera");

function takeSnap() 
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image" src="' + data_uri + '">'
    });
}

console.log('ml5 version :',ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n8ekz_ZdE/model.json', loaded);

function loaded() 
{ 
    console.log("Its Loaded after 84 years...");
}

function checkFunction() 
{
    img = document.getElementById("image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) 
{ 
    if (error) 
    { 
        console.log(error);
    }
    else 
    { 
        console.log(results);
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}