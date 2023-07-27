var msg = document.getElementById("msg");

var SpeechRecognition = window.webkitSpeechRecognition

var pikachu = new SpeechRecognition();

var fala = ''

var imagem;

var x = 0;
var y = 0;

var podeDesenhar = false;

function stt(){
    msg.innerHTML = "O sistema está ouvindo🔈🔉🔊...";

    pikachu.start();
}
pikachu.onresult=(r)=>{
    console.log(r)
    fala = r.results[0][0].transcript
    msg.innerHTML = "O sistema ouviu:"+fala
    if(fala == "círculo"||fala == "retângulo"||fala == "Pikachu"){
    x = random(30,600-30);
    y = random(30,400-30);
    podeDesenhar = true
    }}
function preload(){  
    imagem = loadImage("pi.png") 
}
function setup(){
    canvas = createCanvas(600,400);

}
function draw(){
    canvas.center()
    if(podeDesenhar){
        fill("red")
        if(fala == "retângulo"){
            rect(x,y,50,30)
        }
        if(fala == "círculo"){
        ellipse(x,y,50,50)
        }
        if(fala == "Pikachu"){
           image(imagem,x,y,30,80)         }
        msg.innerHTML = fala + ' foi desenhado'
        podeDesenhar  = false;
    }
}