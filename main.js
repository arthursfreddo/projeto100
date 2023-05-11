var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);


}
 SetTimeOut (function() {

imgId = "FOTO1"
takeSelfie();
speakData = "Tirando Sua Selfie Em 5 Segundos";
var utterThis = new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);

}, 5000);


SetTimeOut (function() {

    imgId = "FOTO2"
    takeSelfie();
    speakData = "Tirando Sua Selfie Em 5 Segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    
    }, 5000);


    SetTimeOut (function() {

        imgId = "FOTO3"
        takeSelfie();
        speakData = "Tirando Sua Selfie Em 5 Segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
        
        }, 5000);



        function takeSelfie()
    {
         console.log(imgId)

         Webcam.snap(function(data_Uri)
          {

if(imgId==Selfie1){

document.getElementById(result1).innerHTML='<img id="selfie1 src=""'+data_Uri+'"/>'
}



})






         }
         








