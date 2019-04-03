console.log("Append the audio list at the right side");

var audios = [].slice.call(document.getElementsByTagName("audio"));
var audioDiv = document.createElement("div")
function appendAudio(){
    for(var i=0;i!=audios.length;++i){
        if(audios[i].src==undefined)
            continue;
        audioDiv.appendChild(audios[i]);
        audioDiv.appendChild(document.createElement("p"));
    }
    audioDiv.style = ('position: fixed;top: 20%;right: 10px;');
    document.body.appendChild(audioDiv);
}

appendAudio()