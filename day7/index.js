function highAndLow(numbers){
  // ...
  var arr = numbers.split(' ').sort((a,b)=>a-b)
  return  arr[arr.length-1] +" " +   arr[0]
}
module.exports = highAndLow