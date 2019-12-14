const readline = require('readline-sync')
const n = readline.question('enter the length of array ')
// console.log(n);
const array = []
for (let i = 0; i < n; i++) {
  array[i] = readline.question('enter the element of array')
}
newArray = array.map(Number)
console.log(newArray)

let count = 0

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      if (newArray[i] + newArray[j] + newArray[k] == 0) {
        count++
        console.log('triplet is ' + newArray[i] + ' ' + newArray[j] + ' ' + newArray[k])
      }
    }
  }
}
console.log('number of triplets ' + count)
