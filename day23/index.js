var duplicateCount = function(text) {
  // var arr = [];
  // var num = 0 ;
  // var text = text.toLowerCase()
  // text.split('').forEach(item=>{
  //   if(arr.indexOf(item)==-1 &&  (text.split(item).length - 1) > 1){
  //     num ++ 
  //     arr.push(item)
  //   } 
  // })
  // return num 
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []);
}
console.log(duplicateCount("asdadaaa"))
// module.exports = duplicateCount

