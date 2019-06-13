function wordMesh(arr){
  var str = ''
  for(var i=0;i<arr.length - 1;i++) {
    var t = (arr[i] + ' ' + arr[i+1]).match(/(.+) \1/)
    if(!t) return "failed to mesh"
    str+=t[1]
  }
  return str
}
// console.log(wordMesh(["beacon","condominium","umbilical","california"]))
module.exports = wordMesh
