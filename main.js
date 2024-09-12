
function IncreaseFontSize(){
    document.querySelector(".abd").classList.add("increaseFont");
}

function DecreaseFontSize(){
    document.querySelector(".abd").classList.add("decreaseFont")
}

document.querySelector(".increase").onclick=IncreaseFontSize;
document.querySelector(".decrease").onclick=DecreaseFontSize;

