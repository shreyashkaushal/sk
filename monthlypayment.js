const readline = require('readline-sync')
const P = readline.question('enter the principal loan amount ')
const R = readline.question('enter the rate percentage  ')
const Y = readline.question('enter the duration to pay off ')
function monthlyPayment (P, R, Y) {
  const r = R / (12 * 100)
  const n = 12 * Y
  const deno = 1 - (1 + r) ** (-n)
  const payment = (P * r) / deno
  return payment
}

console.log(' the monthly payment to be done ' + monthlyPayment(P, R, Y))
