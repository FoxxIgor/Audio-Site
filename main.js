//https://teachablemachine.withgoogle.com/models/Rbnq08__S/
function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Rbnq08__S/model.json", reader);
}
function reader(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("som").innerHTML=results[0].label;
        if( results[0].label =="Gaveta Abrindo"){
            document.getElementById("imagens").src="gaveta.png";
        }
        if( results[0].label =="Palmas"){
            document.getElementById("imagens").src="palma.png";
        }
        if( results[0].label =="Batidos"){
            document.getElementById("imagens").src="table-removebg-preview.png";
        }    
        
    }
}