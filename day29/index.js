function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
    return match.charAt(1).toUpperCase();
  });
}
function encode(input) {
  var regExp=/(\w)\1*/ig;
  return input.replace(regExp,function(match,value){
    return match.length + value
  }); 
}
function decode(input) {
  var regExp=/(\d+)\w/g; 
  // var regExp=/(\d+)(.)+?/g
  return input.replace(regExp,function(p1,p2){
    return p1[p1.length-1].repeat(p2);
  }); 
}
// console.log(decode('10A1B'))
module.exports = {
  encode,
  decode
}
