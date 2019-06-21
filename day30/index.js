function stringExpansion(str){
  return str.replace(/\d\D*/g,m=>m.slice(1).replace(/./g,n=>n.repeat(m[0])))
}

// console.log(stringExpansion('3D2a5d2f'))
module.exports = stringExpansion