const readline = require('readline-sync')
const c = readline.question(' Enter the number ')
function sqrt (c) {
  let t = c

  const ep = 1 * (10 ** (-15))

  // console.log(temp)
  while ((Math.abs(t - (c / t))) > ep * t) {
    t = ((c / t) + t) / 2
  }

  return t
}
// const ep = 1 * (10 ** (-15))
console.log(sqrt(c))
// console.log(sqrt(c))
