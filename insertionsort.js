const readline = require('readline-sync')
const arr = readline.question(' Enter the string ').split('')
console.log('Before sorting ' + arr)

const insertionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    let j

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = el
  }
  return arr
}

const result = insertionSort(arr)
console.log('After sorting ' + result)
