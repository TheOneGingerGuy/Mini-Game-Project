const start = document.getElementById(`start`)
const reset = document.getElementById(`reset`)
const gameArea = document.getElementById(`gameArea`)
const target = document.getElementById(`target`)
const times = [];
const score = [];
let seconds = 0;
let timer = null;
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
    console.timeEnd(`clickTimer`)
    position(target,gameArea);
    console.time(`clickTimer`)
    times.push(`${clickTimer / 1000}`)
    console.log(`${times}`)
})
reset.addEventListener(`click`, e=>{
    start.style.display = `inline`;
    target.style.display =  `none`;
})
start.addEventListener(`click`, (e)=>{
    start.style.display =`none`;
    position(target,gameArea);    
    target.style.display = `inline`;
})
function updateDisplay(){
    document.getElementById('timerDisplay').textContent = seconds
}
function startTimer(){
    if(timer=== null){
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
    stopTimer();
    seconds = 0
    updateDisplay();
}