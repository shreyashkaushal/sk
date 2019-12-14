const readline = require('readline-sync')
const size = readline.question('enter the size of array ')
let temp = []
for (let i = 0; i < size; i++) {
  temp.push(readline.question('Enter the elements of an array '))
}
// let arr = temp.map(Number)
// console.log(arr)
let unsortedArr = temp.map(Number)
function merge (leftArr, rightArr) {
  let sortedArr = []
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0])
      leftArr = leftArr.slice(1)
    } else {
      sortedArr.push(rightArr[0])
      rightArr = rightArr.slice(1)
    }
  }
  while (leftArr.length) { sortedArr.push(leftArr.shift()) }
  while (rightArr.length) { sortedArr.push(rightArr.shift()) }
  return sortedArr
}
function mergesort (arr) {
  if (arr.length < 2) {
    return arr
  } else {
    let midpoint = parseInt(arr.length / 2)
    let leftArr = arr.slice(0, midpoint)
    let rightArr = arr.slice(midpoint, arr.length)
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
}
console.log('The sorted array is ')
console.log(mergesort(unsortedArr))
