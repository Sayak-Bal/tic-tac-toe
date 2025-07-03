const box = document.querySelectorAll(".box");
let trun = true;
let win = document.querySelector(".winner");
let newbtn = document.querySelector(".new");
let reset = document.querySelector(".reset");
const reseting = ()=>{
    trun = true;
for(boxs of box){
    boxs.disabled = false;
    boxs.innerText = "";
}
win.style.display ="none";
}

const winPattens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

box.forEach((box) =>{
box.addEventListener("click", () => {
    console.log("click");
    if(trun){
        box.innerText = "x";
        trun = false;
    }
    else{
        box.innerText = "0";
        trun = true;
    }
    box.disabled = true;
    checkwinner(); 
    });
});

const showwinner = (winner) =>{
win.innerText = `congratulation,winner is ${winner}`;
win.style.display ="block";
for(let boxs of box){
    boxs.disabled = true;
}
}

const checkwinner = () => {
    for(let patten of winPattens){
        let pos1= box[patten[0]].innerText;
     let pos2 = box[patten[1]].innerText;
     let pos3 = box[patten[2]].innerText;
     if(pos1 !="" && pos2!= "" && pos3 !=""){
if (pos1  === pos2 && pos2 === pos3){
    console.log("winner");
    showwinner(pos1);
}
    }
}
    };
reset.addEventListener("click",reseting);