// function pigIt(str){
//     var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");
//     var result = "";
//     return str.split(' ').map((item)=>{
//         console.log(item[0])
//         if (!pattern.test(item)){
//             result =   item.substr(1) +  item.substring(0,1)  + 'ay' 
//         } else {
//             result = item
//         }
//         return result
//     }).join(' ')
//   }
function pigIt(str) {
    return str.split(' ')
        .map(e => e.match(/\w+/) ? e.substring(1) + e[0] + 'ay' : e)
        .join(' ');
}
module.exports = pigIt
// console.log(pigIt('O tempora o mores !'))