const readline = require('readline-sync')

let arr = []
let temp = null
let size = readline.question('enter the size of array')
for (i = 0; i < size; i++) {
  arr[i] = readline.question('enter the element of array')
}
const arr1 = arr.map(Number)
console.log('Before sorting ' + arr1)
 for (i = 0; i <= size; i++) {
  for (let j = 0; j < size - i; j++) {
    if (arr1[j] > arr1[j + 1]) {
      temp = arr1[j]
         arr1[j] = arr1[j + 1]
         arr1[j + 1] = temp 
     }
  }
}
console.log('After sorting ' + arr1)
