function windChill (t, v) {
  if (t < 50 && !(v > 3 && v > 120)) {
    const a = Math.pow(v, 0.16)
    const windchill = 35.74 + 0.6215 * t - 35.75 * a + 0.4275 * t * a

    return windchill
  } else {
    console.log('enter valid value of t and v ')

  }
}
console.log('Windchill is ' + windChill(51, 5))
