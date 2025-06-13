let restartButton=document.querySelector(".restart");
let startScreen=document.querySelector(".openingPage");
let gameScreenOne=document.querySelector(".gameplayPageCont");
let houseAudio=document.querySelector("#hauntedMusic");
let optionOneFirst=document.querySelector(".optionOneFirst");
let optionTwoFirst=document.querySelector(".optionTwoFirst");
let contextText=document.querySelector(".optionLore");
let doorSlamAudio=document.querySelector("#doorSlam");
let screamAudio=document.querySelector("#roomScream");
let bodyBackground=document.querySelector("body");
let gameScreenTwo=document.querySelector(".gameplayPageTwoCont");
let gameScreenThree=document.querySelector(".gameplayPageThreeCont");
let optionOneSecond=document.querySelector(".optionOneSecond");
let optionTwoSecond=document.querySelector(".optionTwoSecond");
let secretCode=document.querySelector("title");
let doorDeath=document.querySelector(".doorDeath");
let doubleEscape=document.querySelector(".doubleEscape");
let monsterShriekAudio=document.querySelector("#monsterSound");
let monsterChaseAudio=document.querySelector("#monsterChase");
let optionOneThird=document.querySelector(".optionOneThird");
let optionTwoThird=document.querySelector(".optionTwoThird");
let hallwayDeath=document.querySelector(".hallwayDeath");
let soloEscape=document.querySelector(".soloEscape");

playButton= document.querySelector(".goButton");
playButton.addEventListener("click", function(){
    console.log(houseAudio);
    houseAudio.play();
    houseAudio.loop=true;
    startScreen.style.display="none";
    gameScreenOne.style.display="block";
    restartButton.style.display="block";
});


restartButton.addEventListener("click",function(){
    gameScreenOne.style.display="none";
    gameScreenTwo.style.display="none";
    gameScreenThree.style.display="none";
    hallwayDeath.style.display="none"; 
    startScreen.style.display="block";
    restartButton.style.display="none";
    houseAudio.play();
    bodyBackground.style.backgroundImage="url('hauntedHouse.png')";
    doorDeath.style.display="none";
    doubleEscape.style.display="none";
    soloEscape.style.display="none";
}); 

let turnAroundButton=document.querySelector(".turnAround");
turnAroundButton.addEventListener("click", function(){
    window.close();
});

optionOneFirst.addEventListener("click", function(){
    screamAudio.play();
    doorSlamAudio.play();
    bodyBackground.style.backgroundImage="url('fainted.png')";
    gameScreenOne.style.display="none";
    gameScreenTwo.style.display="block"
    optionOneSecond.style.backgroundImage="url('window.png')";
    optionTwoSecond.style.backgroundImage="url('door.png')";
});

optionTwoFirst.addEventListener("click", function(){
    gameScreenThree.style.display="block";
    gameScreenOne.style.display="none";
    bodyBackground.style.backgroundImage="url('monster.png')";
    monsterShriekAudio.play();
    monsterChaseAudio.play();
    optionOneThird.style.backgroundImage="url('hallway.png')";
    optionTwoThird.style.backgroundImage="url('hideRoom.png')";
    
});

optionOneSecond.addEventListener("click", function(){
    gameScreenTwo.style.display="none";
    bodyBackground.style.backgroundImage="url('doubleEscape.png')";
    doubleEscape.style.display="block";
    houseAudio.pause(); 
});
optionTwoSecond.addEventListener("click", function(){
    gameScreenTwo.style.display="none";
    bodyBackground.style.backgroundImage="url('bloodSpatter.png')";
    doorDeath.style.display="block";
});  

optionOneThird.addEventListener("click", function(){
    gameScreenThree.style.display="none";
    bodyBackground.style.backgroundImage="url('bloodSpatter.png')";
    hallwayDeath.style.display="block";
});
optionTwoThird.addEventListener("click", function(){
    gameScreenThree.style.display="none";
    bodyBackground.style.backgroundImage="url('soloEscape.png')";
    soloEscape.style.display="block";
    
});