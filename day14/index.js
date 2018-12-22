// function getCount(str) {
//   var vowelsCount = 0;
//   var arr = ['a','e','i','o','u'];
//   var i = 0;
//   str.split('').forEach(element => {
//     arr.forEach(elements => {
//       if(element == elements) {
//         i++;
//       }
//     })
//   });
//   vowelsCount = i
  
//   return vowelsCount;
// }

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

module.exports = getCount