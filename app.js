let rc = rough.svg(document.querySelector("#svg"))

const addkwButton = document.querySelector('#addkw')
const addromButton = document.querySelector("#addrom")
const stop = document.querySelector('#stop')

var config = {
    "x": 300,
    "y": 20,
    "gap":30,
    "width":300,
    "height":100
}

// let kwadrat = rc.rectangle(800,15,300,300, {fill:'rgba(255,0,0,0.5)', fillStyle:'solid'})
// svg.appendChild(kwadrat)

// kwadrat.addEventListener('click',()=>{
//     console.log("1")
// })

let elipse = rc.ellipse(config.x*3/2, config.y+config.height/2, config.width, config.height, {fill:'rgba(255,0,0,0.5)', fillStyle:'solid'})
svg.appendChild(elipse)

// funkcja do kwadratów
addkwButton.addEventListener('click', ()=>{
    drawRectangle(config.x, config.y, config.width, config.height, config.gap)
})
function drawRectangle(x, y, width, height, gap){
    
    // rysowanie "kwadratów"
    let kwadrat = rc.rectangle(x,y+gap+height,width,height, {fill:'rgba(255,0,0,0.5)', fillStyle:'solid'})
    svg.appendChild(kwadrat)

    // rysowanie linii
    let line = rc.line(x+width/2, y+height, x+width/2, y+height+gap)
    svg.appendChild(line)

    config.y = config.y+config.height+config.gap
}

// funkcja do rombów
addromButton.addEventListener('click',()=>{
    drawLisener(config.x, config.y, config.width, config.height, config.gap)
})
function drawLisener(x, y, width, height, gap){
    //rysowanie rombów
    d = height
    let romb = rc.polygon([[x+width/2, y+height+gap], [x+width/2-d/2, y+height+gap+d/2], [x+width/2, y+height+gap+d], [x+width/2+d/2, y+height+gap+d/2]], {fill:'rgba(255,0,0,0.5)', fillStyle:'solid'})
    svg.appendChild(romb)

    //rysowanie kwadratów
    let line = rc.line(x+width/2, y+height, x+width/2, y+height+gap)
    svg.appendChild(line)

    config.y=y+gap+height
}

stop.addEventListener('click',()=>{
    drawStop(config.x, config.y, config.width, config.height, config.gap)
})
function drawStop(x, y, width, height, gap){

    let line = rc.line(x+width/2, y+height, x+width/2, y+height+gap)
    svg.appendChild(line)

    let elipse = rc.ellipse(config.x*3/2, config.y+config.height/2+height+gap, config.width, config.height, {fill:'rgba(255,0,0,0.5)', fillStyle:'solid'})
    svg.appendChild(elipse)

    addkwButton.style.display="none"
    addromButton.style.display="none"
    stop.style.display='none'
}