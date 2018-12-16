// function evenNumbers(array, number) {
//   var newArr = array.filter(item=> item % 2 === 0)
//   newArr =  newArr.slice(newArr.length-number,newArr.length)
//   return newArr
// }

function evenNumbers(array, number) {
  return array.filter(item=> item % 2 === 0).slice(-number)
}

module.exports = evenNumbers