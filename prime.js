
Prime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

display = (n) => {
  const result = [2]
  for (let i = 3; i < n; i += 2) {
    if (Prime(i)) {
      result.push(i)
    }
  }
  return result;
}
let input = display(1000)
console.log(input)
Palindrome = (input) => {

  let rem, temp, final = 0;
  temp = input;
  while (input > 0) {
    rem = input % 10;
    input = parseInt(input / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    return true
  }

}
let result2 = []
for (let i = 0; i < input.length; i++) {
  if (Palindrome(input[i])) {
    result2.push(input[i]);
  }
}
console.log(result2)
