let restartButton=document.querySelector(".restart");
let startScreen=document.querySelector(".openingPage");
let gameScreen=document.querySelector(".gameplayPage");
let houseAudio=document.querySelector("#hauntedMusic");
let optionOne=document.querySelector(".optionOne");
let contextText=document.querySelector(".optionLore");

playButton= document.querySelector(".goButton");
playButton.addEventListener("click", function(){
    console.log(houseAudio);
    houseAudio.play();
    houseAudio.loop=true;
    startScreen.style.display="none";
    gameScreen.style.display="block";
    restartButton.style.display="block";
});


restartButton.addEventListener("click",function(){
    gameScreen.style.display="none";
    startScreen.style.display="block";
    houseAudio.play();
}); 

let turnAroundButton=document.querySelector(".turnAround");
turnAroundButton.addEventListener("click", function(){
    window.close();
});

optionOne.addEventListener("click", function(){
    contextText.innerHTML="You find your friend unconscious on the ground, but all of a sudden the door behind you slams shut. Do you?";
    console.log(contextText);
});
