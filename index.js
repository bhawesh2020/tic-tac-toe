let turn=true;
let winner=false;
let winStrings=["012","036","048","147","258","246","345","678"];
let count=0;
let gameOver=()=>{
    alert("game over");
    reset();
};
let reset=()=>{
    turn=true;
    winner=false;
    count=0;
    for(let i=0;i<9;i++)document.getElementsByClassName('cell')[i].innerHTML=null;
}
let checkWin=()=>{
    if(!turn){
        for(let i=0;i<winStrings.length;i++){
            if(document.getElementsByClassName('cell')[winStrings[i][0]].innerHTML==='X'&&document.getElementsByClassName('cell')[winStrings[i][1]].innerHTML==='X'&&document.getElementsByClassName('cell')[winStrings[i][2]].innerHTML==='X'){
                winner=true;
                alert("Player 1 wins");
            }
        }
    }else{
        for(let i=0;i<winStrings.length;i++){
            if(document.getElementsByClassName('cell')[winStrings[i][0]].innerHTML==='0'&&document.getElementsByClassName('cell')[winStrings[i][1]].innerHTML==='0'&&document.getElementsByClassName('cell')[winStrings[i][2]].innerHTML==='0'){
                winner=true;
                alert("Player 2 wins");
            }
        }
    }
    
    if(winner===false && count===9){
        console.log("here");
        setTimeout(gameOver,0);}
    if(winner===true)reset();
}
let play=(e)=>{
    if(e.srcElement.innerHTML!==''){
        alert("You can't play here");
        return;
    }
    
    count++;
    if(turn){
        e.srcElement.innerHTML='X';
        turn=!turn;
        setTimeout(checkWin,0);
    }else{
        e.srcElement.innerHTML='0';
        turn=!turn;
        setTimeout(checkWin,0);
    }
    
};
for(let i=0;i<9;i++)document.getElementsByClassName('cell')[i].addEventListener('click',play);
