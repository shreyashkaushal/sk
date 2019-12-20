const readline = require('readline-sync');
const d = readline.question('Enter the day ');
const m = readline.question('Enter the month ');
const y = readline.question('Enter the year ');

dayOfWeek = (m, d, y) => {
    let y0 = Math.round(y - (14 - m) / 12)
    // console.log(y0);
    let x = Math.round(y0 + y0 / 4 - y0 / 100 + y0 / 400);
    //  console.log(x);
    let m0 = Math.round(m + 12 * ((14 - m) / 12) - 2);
    // console.log(m0);
    let d0 = Math.round((d + x + (31 * m0 / 12)) % 7)
    // console.log(d0);
    return d0
}

let result = dayOfWeek(m, d, y);
//console.log(result)
switch (result) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        text = "No day found ";

}
console.log('Day is ' + day);