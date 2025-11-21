const start = document.getElementById(`start`)
const pause = document.getElementById(`pause`)
const reset = document.getElementById(`reset`)
const gameArea = document.getElementById(`gameArea`)
const target = document.getElementById(`target`)
const times = [];
const score = [];
let seconds = 0;
let timer = null;
let lives = 3;
const sfxAudio = document.getElementById(`sfxAudio`)
const soundToggleButton = document.getElementById(`soundToggleButton`)
const sfx = {
    soundEffect: new Audio(`squidward-spare-change-made-with-Voicemod.mp3`)
}
// basic targeters for the divs in the Html




function position(target,gameArea){
    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;
    const tgtHeight = target.clientHeight;
    const tgtWidth = target.clientWidth;
    // In my research of how to make a div a apppear 
    // randomly inside of a div this was inlcuded.
    // I looked it up if it wasnt obvious.
    // It just defines widths and heights as numbers for math.

    const maxX = areaWidth - tgtWidth;
    const maxY = areaHeight - tgtHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + `px`;
    target.style.top = randomY + `px`;
}
// function stpWatch(){
//     const startTime = Date.now();
// }
target.addEventListener(`click`, (e)=>{
    position(target,gameArea);
    updateScore.innerHTML++
    soundEffect: new Audio(``)
})
reset.addEventListener(`click`, e=>{
    start.style.display = `inline`;
    target.style.display =  `none`;
    updateScore.innerHTML = 0;
})
start.addEventListener(`click`, (e)=>{
    start.style.display =`none`;
    position(target,gameArea);    
    target.style.display = `inline`;
})
pause.addEventListener(`click`, e=>{
    target.style.display =  `none`;
})
function updateDisplay(){
    document.getElementById('timerDisplay').textContent = seconds
}
function startTimer(){
    if(timer === null){
        timer = setInterval(()=>{
            seconds++;
            updateDisplay();
        }, 1000) //1s
    }
}
function pauseTimer(){
    clearInterval(timer)
    timer = null
}
function resetTimer(){
    pauseTimer();
    seconds = 0
    updateDisplay(seconds);
}
soundToggleButton.addEventListener(click ,  e=> {
    if(sfxAudio.muted){
        sfxAudio.muted = false;
        soundToggleButton.classList.remove(`sound-off`);
        soundToggleButton.classList.add(`sound-on`);
    }else{
        sfxAudio.muted = true;
        soundToggleButton.classList.remove(`sound-on`);
        soundToggleButton.classList.add(`sound-off`);
    }
})
   