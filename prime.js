
function Prime (num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function display (n) {
  const result = [2]
  for (let i = 3; i < n; i += 2) {
    if (Prime(i)) {
      result.push(i)
    }
  }
  console.log(result) 
}

// display(20);
display(1000)
