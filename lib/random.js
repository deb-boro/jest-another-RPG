function checkIfEqual(val1, val2) {
  if (val1 === val2) {
    return true
  } else {
    return false
  }
}

function randomNumber() {
  console.log(Math.random() * 9 + 1)
  return Math.floor(Math.random() * 9 + 1)
}

module.exports = { checkIfEqual, randomNumber }
