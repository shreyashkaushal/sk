const readline = require('readline-sync')
let input = readline.question('Enter the decimal value ')
console.log(input)
const result = parseInt(input, 10).toString(2);
console.log(result);
function toBinary(input) {
    let binary = []
    let i = 0;
    while (input > 0) {
        binary[i++] = input % 2
        input = Math.floor(input / 2)


    }
    //console.log(toBinary(input));
    for (i = binary.length; i > 0; i--) {
        console.log(binary[i])
    }
}

// console.log(Math.floor(9/2))