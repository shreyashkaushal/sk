const readline = require('readline-sync')
const sample = readline.question('Enter the string ')
function allPermutations (sample) {
  const result = []
  if (sample.length === 0) {
    result.push(sample)
    return result
  }
  for (let i = 0; i < sample.length; i++) {
    const firstChar = sample[i]
    const leftChar = sample.substring(0, i) + sample.substring(i + 1)
    const tempPermutation = allPermutations(leftChar)
    // console.log('i am temp ' + tempPermutation)
    for (let j = 0; j < tempPermutation.length; j++) {
      result.push(firstChar + tempPermutation[j])
    }
  }
  return result
}
console.log(allPermutations(sample))
