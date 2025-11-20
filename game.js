const start = document.getElementById(`start`)
const reset = document.getElementById(`reset`)
const gameArea = document.getElementById(`gameArea`)
const target = document.getElementById(`target`)
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
reset.addEventListener(`click`, e=>{
    start.style.display = `block`;
})
start.addEventListener(`click`, (e)=>{
    start.style.display =`none`;
    target(target,gameArea);    
}) 