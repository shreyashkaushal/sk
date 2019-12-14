const readline = require('readline-sync')
const size = readline.question('enter the size of array ')
const arr = []
for (let i = 0; i < size; i++) {
  arr.push(readline.question('Enter the words '))
}
const word = readline.question('Enter the word to be search ').toString()
console.log(arr)
console.log(word)
// const arr = [2, 5, 4, 3, 9, 10]

const mid = Math.round(arr.length / 2)
// console.log(mid)
if (word === arr[mid]) {
  console.log('element found and at index' + mid)
} else if (word > arr[mid]) {
  for (let i = mid; i < arr.length; i++) {
    if (word === arr[i]) {
      console.log('element found at index' + i)
    }
  }
} else {
  for (let i = 0; i < mid; i++) {
    if (word === arr[i]) {
      console.log('element found at index' + i)
    }
  }
}
