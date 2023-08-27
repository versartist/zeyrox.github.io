const recordBtn = document.querySelector("#record")
const downloadBtn = document.querySelector("download")
const clearBtn = document.querySelector(".clear")
const result = document.querySelector(".result")
const  inputLang= document.querySelector("#language")

function addLang(){
    languages.forEach((lang)=>{
        const option = document.createElement("option");
        option.value = lang.code;
        option.innerHTML= lang.name;
        inputLang.appendChild(option);
    });
}
addLang()

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition,
recognition,recording = false ; 

function speechToText(){
    try{
     recognition = new speechRecognition();
     recognition.lang = inputLang.value;
     recognition.interimREsults = true;

     recognition.start();
     recognition.onresult = (event)=>{
        const speechResult = event.results[0][0].transcript;

        if (event.results[0].isFinal) {
            result.innerHTML +=" " + speechResult;
            result.querySelector("p").remove();
        } else {
            if(!document.querySelector(".interim")) {
                const interim = document.createElement("p");
                interim.classList.add('interim');
            }
           document.querySelector(".interim").innerHTML = " "+ speechResult;
        }
        downloadBtn.disabled = false;
      };
      recognition.onspeechend = ()=> {
        speechToText();
      };
       
      recognition.onerror = (event) => {
     alert("Error Occured :"+event.error);
      };

    }
    catch(err)
    {console.log(err);}
}
recordBtn.addEventListener("click", ()=> {
    if (!recording) {
        speechToText();
        recording=true;
        recordBtn.classList.add("listening");
        recordBtn.classList.reomve("listen");
    } else {
        stopRecording();
    } 
})

function stopRecording(){
  recognition.stop();
  recordBtn.classList.add("listen");
  recordBtn.classList.remove("listening");
  recording = false;
}