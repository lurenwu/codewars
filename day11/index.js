// function tidyNumber(n){
//   return n.toString().split('').every((item,index,arr)=>{
//     if(index=== arr.length -1) {
//       return true
//     }
//     if(index!== arr.length -1) {
//       return  parseInt(arr[index])<=parseInt(arr[index+1])
//     }
//   })
// }
// function tidyNumber(n){
//   return [...n+=""].sort().join(``)==n
// }

function tidyNumber(n){
  let arr = [...n.toString()].map(Number);
  return arr.every((el, ind, arr) => !ind || el >= arr[ind - 1]);
}
module.exports=tidyNumber