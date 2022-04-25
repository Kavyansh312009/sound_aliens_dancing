function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KZTvZp83X/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255);
        random_number_g= Math.floor(Math.random()*255);
        random_number_b= Math.floor(Math.random()*255);

        document.getElementById("label_result").innerHTML='I can Hear -'+ results[0].label;
        document.getElementById("label_confidence").innerHTML='Accuracy -'+ (results[0].confidence*100).toFixed(3)+"%";
        document.getElementById("label_result").style.color ="rgb("+random_number_r +","+random_number_g +","+random_number_b+")";
        document.getElementById("label_confidence").style.color ="rgb("+random_number_r +","+random_number_g +","+random_number_b+")";

        img1 = document.getElementById("a1");
        img2 = document.getElementById("a2");
        img3 = document.getElementById("a3");
        img4 = document.getElementById("a4");

        if (results[0].label == "Clap"){
            img1.src ='aliens-01.gif';
            img2.src ='aliens-02.png';
            img3.src ='aliens-03.png';
            img4.src ='aliens-04.png';
        }else if(results[0].label == "Snap"){
            img1.src ='aliens-01.png';
            img2.src ='aliens-02.gif';
            img3.src ='aliens-03.png';
            img4.src ='aliens-04.png';
        }else if (results[0].label == "Bell"){
            img1.src ='aliens-01.png';
            img2.src ='aliens-02.png';
            img3.src ='aliens-03.gif';
            img4.src ='aliens-04.png';
    }else{
        img1.src ='aliens-01.png';
        img2.src ='aliens-02.png';
        img3.src ='aliens-03.png';
        img4.src ='aliens-04.gif';
}}}
