const readline = require('readline-sync')

let sample1 = readline.question('enter first string')
let sample2 = readline.question('enter second string')

if (sample1.length == sample2.length) {
  sample1 = sample1.split('').sort().join()
    sample2 = sample2.split('').sort().join()
    console.log(sample1)
    console.log(sample2)

    if (sample1 == sample2) {
    console.log('its an anagram')
    } else {
    console.log('not an anagram')
    }
} else {
  console.log('not of same length hence not an anagram')
}
