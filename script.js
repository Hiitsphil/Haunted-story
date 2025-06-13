let playButton= document.querySelector(".goButton");
playButton.addEventListener("click", function(){
    var houseAudio=document.querySelector("#hauntedMusic");
    console.log(houseAudio);
    houseAudio.play();
    houseAudio.loop=true;
    var startScreen=document.querySelector(".openingPage");
    var gameScreen=document.querySelector(".gameplayPage");
    startScreen.style.display="none";
    gameScreen.style.display="block";
});

let turnAroundButton=document.querySelector("")