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

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

// function getCount(str) {
//   let vowels = ['a','e','i','o','u'];
//   return str.split('').filter(letter => {
//     return vowels.includes(letter)? true : false;
//   }).length;
// }

const getCount = str => str.replace(/[^aeiou]/g, '').length;

module.exports = getCount