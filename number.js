let randomNumber = document.getElementById('random-number');
let profit = document.getElementById('profit');
let lost = document.getElementById("lost");
let checked = document.getElementById('checked');
let playNumber = document.getElementById('play-number');
let numberRandom = null;
let activeProfit = JSON.parse(localStorage.getItem("profit")) ?? null;
let activeLost = JSON.parse(localStorage.getItem("lost"))  ?? null;
let rendomCoeficient = 100;
let n = 10;

profit.textContent = activeProfit;
lost.textContent = activeLost;

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

playNumber.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        send();
    }
});

function send(){
    if(+playNumber.value === numberRandom){
        activeProfit++;
        console.log(activeProfit);
        activeLost++;
        localStorage.setItem('profit', JSON.stringify(activeProfit));
        localStorage.setItem('lost', JSON.stringify(activeLost));
        profit.textContent = activeProfit;
        lost.textContent = activeLost;        
        playNumber.value = null;
    }else{
        activeLost++;
        lost.textContent = activeLost;   
        localStorage.setItem('lost', JSON.stringify(activeLost)); 
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
        }, 500);
    }
}

removeRandomNumber();
