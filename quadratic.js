function quadratic (a, b, c) {
  const delta = b * b - 4 * a * c
  const root1 = (-b + Math.sqrt(delta)) / (2 * a)
  const root2 = (-b - Math.sqrt(delta)) / (2 * a)
  if (isNaN(root1) && isNaN(root2)) {
    console.log('roots are imaginary')
  } else {
    console.log('Roots are ' + root1 + ' ' + root2)
  }
}

quadratic(1, 4, 4)
quadratic(1, 2, 2)
