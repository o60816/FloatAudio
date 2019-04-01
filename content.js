console.log("內插腳本載入");

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    window.requestAnimationFrame = requestAnimationFrame;
})();

var audios = document.getElementsByTagName("audio");
var audioDiv = document.createElement("div")
function appendAudio(){
    var length = audios.length;
    for(var i=0;i!=length;++i){
        var audio = document.createElement("audio");
        audio.src = audios[i].src;
        audio.controls = "true"
        audioDiv.appendChild(audio);
        audioDiv.appendChild(document.createElement("br"));
        audioDiv.appendChild(document.createElement("br"));
    }
    audioDiv.style = ('position: fixed;top: 20%;right: 10px;');
    document.body.appendChild(audioDiv);
}

appendAudio()