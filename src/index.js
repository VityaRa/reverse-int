function reverse (n) {
  n = n < 0 ? -n : n
  return parseInt(n.toString().split('').reverse().join(''))
}

console.log(reverse(155))
module.exports = reverse
