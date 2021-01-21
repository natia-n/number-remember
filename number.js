let randomNumber = document.getElementById('random-number');
let profit = document.getElementById('profit');
let lost = document.getElementById("lost");
let checked = document.getElementById('checked');
let playNumber = document.getElementById('play-number');
let numberRandom = null;
let activeProfit = 0;
let activeLost = 0;
profit.textContent = activeProfit;
lost.textContent = activeLost;
let rendomCoeficient = 100;
let n = 10;

function rendomCoeficientCecked(){
    if(activeProfit >= n){
        rendomCoeficient = rendomCoeficient * 10;
        n = n + 10;
    }
}

rendomCoeficientCecked();

function mathRandom(rendomCoeficient){
    let random = Math.random();
    if(random < 0.1){
        numberRandom = Math.floor(random * rendomCoeficient * 10); 
        randomNumber.textContent = numberRandom;        
    }else{
        numberRandom = Math.floor(random * rendomCoeficient);  
        randomNumber.textContent = numberRandom;        
    }       
}

mathRandom(rendomCoeficient);

checked.addEventListener('click', send);

function send(){
    if(+playNumber.value === numberRandom){
        activeProfit++;
        activeLost++;
        profit.textContent = activeProfit;
        lost.textContent = activeLost;        
        playNumber.value = null
    }else{
        activeLost++;
        lost.textContent = activeLost;        
        playNumber.value = null
    }
    rendomCoeficientCecked();
    mathRandom(rendomCoeficient);
    randomNumber.textContent = numberRandom;
    removeRandomNumber();
}

function removeRandomNumber(){
    if(randomNumber.textContent != null){
        setTimeout(() => {
            randomNumber.textContent = null;
            playNumber.value = null
        }, 1000);
    }
}

removeRandomNumber();
