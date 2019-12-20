const readline = require('readline-sync');
let money = readline.question(' Enter the amount of  change you want ');

vendingMachine = (money) => {
    let notes = [2000, 500, 200, 100, 50, 10, 5, 2, 1]
    let count = [];
    for (let i = 0; i < notes.length; i++) {
        if (money >= notes[i]) {
            count[i] = Math.floor(money / notes[i]);
            money = money - count[i] * notes[i]
        }
    }
    console.log('currency notes  are ')
    for (let i in count) {
        if (count[i] != 0) {
            console.log(' note ' + notes[i] + ' count ' + count[i]);
        }
    }

}
vendingMachine(money);

