// 
// 方案一
// function countPositivesSumNegatives(input) {
//     var num1 = 0;
//     var num2 = 0;
//     input && input.forEach(element => {
//         if(element>0) {
//             num1 ++
//         } else  {
//             num2 +=element
//         }
//     });
//     return (input && input.length === 0 || !input)? [] :[num1,num2]
// }
// console.log(countPositivesSumNegatives([]))

// 方案二
function countPositivesSumNegatives(input) {
    return (input && input.length) ? [
        input.filter(x => x > 0).length,
        input.reduce((t, c) => c < 0 ? t + c : t, 0)
      ] : [];
}
module.exports = countPositivesSumNegatives
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))