const isOddNumber = require('./isOddNumber')
const getRandomInt = require('./getRandomInt')

module.exports = (arr) => {
    return Array.from(new Set(arr));
  }