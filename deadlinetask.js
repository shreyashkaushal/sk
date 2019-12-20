const readline = require('readline-sync');
let task = readline.question('Enter the number of task ');
let m = [];
let d = [];
for (let i = 0; i < task; i++) {
    m[i] = readline.question('enter the time to coomplete task');
    d[i] = readline.question(' enter the deadline to complete it ');
}
console.log(m);
console.log(d);