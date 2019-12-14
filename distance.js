const readline = require('readline-sync')
const x1 = readline.question('write x coordinate ')
const y1 = readline.question('write y coordinate ')
const x2 = 0
const y2 = 0
let a = x1 - x2
let b = y1 - y2

const distance = Math.hypot(a, b)
console.log('distance of coordinate from origin ' + distance)
