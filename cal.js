let screen = document.querySelector(".screen")

const addNumToDisplay = (val)=>{
    return screen.textContent += val
}
let canc = ( )=>{
    return screen.textContent = " "
}

const delet = ()=>{
    screen.textContent = screen.textContent.slice(0,-1)
}
const total = ()=>{
    screen.textContent = eval(screen.textContent)
}
let bracket = (brac)=>{
    screen.textContent = screen.textContent**0.5
}
let addPercent = ()=>{
    screen.textContent = screen.textContent/100 
}
