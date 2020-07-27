const setGrid=(numberOfBoxes)=>{
    let grid=document.getElementById("grid");
    let heightWidth=960/numberOfBoxes+"px";
    for (let i=0;i<numberOfBoxes;i++){
        
        let container=document.createElement("div");
        container.style.height=heightWidth;
        container.classList.add("container");
        grid.appendChild(container);

        for (let j=0;j<numberOfBoxes;j++){
            let el=document.createElement("div");
            el.classList.add("grid-box");            
            el.style.height=heightWidth;
            el.style.width=heightWidth;
            el.addEventListener("mouseover", setTracer);
            container.appendChild(el);
        }
    }

}

const setInitialGrid=()=>{    
    setGrid(16);    
}

const setTracer=function(event){
    this.classList.add("hovered-grid-box");
}

const setButtons=()=>{
    let colorResetButton=document.getElementById("color-reset");
    colorResetButton.addEventListener("click", colorReset);
    let gridResetButton=document.getElementById("grid-resize");
    gridResetButton.addEventListener("click", gridReset);
}

const colorReset=()=>{
    let gridBoxList=document.getElementsByClassName("grid-box");
    for (let box of gridBoxList){
        box.classList.remove("hovered-grid-box");
    }
}

const gridReset=()=>{
    document.getElementById("grid").innerHTML="";
    let gridSize=promptUser();
    setGrid(gridSize);    
}

const promptUser=()=>{
    let input;
    do {
        input=prompt("Please enter a number between 1 and 64");
    }
    while (Number(input)<0 || Number(input)>64);
    if (input<0 || input>64){
        input=16;
    }

    return input;
}

setInitialGrid();
setButtons();