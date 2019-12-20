const readline = require('readline-sync');
let k = readline.question('Enter the range ');


let n = 2 ** k;
console.log('think of a number between 0 and ' + (n - 1));
let result = guessTheNumber(0, n);
console.log('your number is ' + result);
function guessTheNumber(low, high) {
    if ((high - low) == 1) {
        return low
    }
    let mid = low + (high - low) / 2;
    console.log('is it less than ' + mid);
    let temp = readline.question(' ');
    if (temp == 'true') return guessTheNumber(low, mid)
    else return guessTheNumber(mid, high)

}
