function removeEveryOther(arr){
    return arr.filter(function(item,index){return index%2 === 0 })
 }


 module.exports = removeEveryOther;