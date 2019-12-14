const readline = require('readline-sync')
const temp = readline.question('enter the temperature value')
function celToFarh (temp) {
  return ((temp * 9 / 5) + 32)
}

function farhToCel (temp) {
  return ((temp - 32) * 5 / 9)
}

console.log('temperature celcius to farehnhit ' + celToFarh(temp))
console.log('temperature farehnhit to celcius ' + farhToCel(temp))
