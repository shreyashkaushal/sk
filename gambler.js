const readline = require('readline-sync')
let stake = readline.question('Enter the stack value ');
let goals = readline.question('set the goal ');
let chances = readline.question('Enter the number of chances ');
let bet = 0;
let wins = 0;
for(let i = 0; i<chances;i++){
    let cash = stake;
    while(cash>0 && cash < goals){
        bet++
        if(Math.random()<0.5) cash++
        else cash--

    }
    if(cash == goals) wins++
}

console.log('no of wins are '+wins+ ' out of '+chances);
console.log('win percentage is '+(wins/chances)*100);

